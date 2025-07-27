import mongoose from 'mongoose';
import SupplierData from '../data/suppliers.js';
import Vendor from '../models/vendorOrder.js';
import haversine from 'haversine-distance';

function getDistanceKm(loc1, loc2) {
  return haversine(loc1, loc2) / 1000; // in kilometers
}

function applyQuantityDiscount(basePrice, totalQuantity) {
  if (totalQuantity >= 10) return basePrice * 0.9;
  if (totalQuantity >= 5) return basePrice * 0.95;
  return basePrice;
}

function getTimeDiffInMinutes(deliveryTime) {
  const vendorTime = new Date(deliveryTime);
  const now = new Date();

  const vendorUTC = Date.UTC(
    vendorTime.getUTCFullYear(),
    vendorTime.getUTCMonth(),
    vendorTime.getUTCDate(),
    vendorTime.getUTCHours(),
    vendorTime.getUTCMinutes(),
    vendorTime.getUTCSeconds()
  );

  const nowUTC = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );

  const diffMin = Math.floor((vendorUTC - nowUTC) / (1000 * 60));
  return diffMin > 0 ? diffMin : 0;
}

async function groupEngine(req, res) {
  try {
    const vendors = await Vendor.find({});
    const groups = [];

    for (const supplier of SupplierData) {
      const eligibleVendors = [];

      const totalItemQuantities = {};

      for (const vendor of vendors) {
        for (const item of vendor.items) {
          const key = `${item.name}-${item.grade}`;
          if (!totalItemQuantities[key]) {
            totalItemQuantities[key] = 0;
          }
          totalItemQuantities[key] += item.quantity;
        }
      }

      for (const vendor of vendors) {
        const dist = getDistanceKm(vendor.location, supplier.location);

        if (dist > supplier.serviceRadiusKm + 20) continue;

        const matchedItems = [];

        for (const item of vendor.items) {
          const stock = supplier.stock.find(
            s => s.item === item.name && s.grade === item.grade && s.qty >= item.quantity
          );

          if (stock) {
            const key = `${item.name}-${item.grade}`;
            const totalQuantity = totalItemQuantities[key] || item.quantity;
            const discountedSupplierPrice = applyQuantityDiscount(stock.pricePerKg, totalQuantity);

            matchedItems.push({
              item: item.name,
              grade: item.grade,
              quantity: item.quantity,
              vendorPrice: item.price,
              supplierPrice: parseFloat(discountedSupplierPrice.toFixed(2)),
              savings: parseFloat(((item.price - discountedSupplierPrice) * item.quantity).toFixed(2)),
              distance: parseFloat(dist.toFixed(2)),
              deliveryTimeMin: getTimeDiffInMinutes(vendor.deliveryTime)
            });
          }
        }

        if (matchedItems.length > 0) {
          eligibleVendors.push({
            vendorId: vendor.vendorId,
            vendorName: vendor.vendorName,
            location: vendor.location,
            matchedItems
          });
        }
      }

      if (eligibleVendors.length > 0) {
        groups.push({
          supplierId: supplier.id,
          supplierName: supplier.name,
          routeFrom: supplier.location,
          matchedVendors: eligibleVendors
        });
      }
    }

    res.status(200).json({ groupedMatches: groups });
  } catch (err) {
    console.error('Error in grouping logic:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default groupEngine;
