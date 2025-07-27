// data/suppliers.js

const suppliers = [
  {
    id: 'S1',
    name: 'AgroMart Distributors',
    location: { lat: 19.0822, lon: 72.7411 }, // Dadar
    stock: [
      { item: 'Fresh Onions', grade: 'A', qty: 120, pricePerKg: 18 },
      { item: 'Ripe Tomatoes', grade: 'A', qty: 100, pricePerKg: 22 },
      { item: 'Red Chilli Powder', grade: 'B', qty: 60, pricePerKg: 140 }
    ],
    serviceRadiusKm: 15
  },
  {
    id: 'S2',
    name: 'FarmBasket Wholesale',
    location: { lat: 19.2147, lon: 72.8360 }, // Borivali
    stock: [
      { item: 'Potatoes', grade: 'A', qty: 150, pricePerKg: 15 },
      { item: 'Ripe Tomatoes', grade: 'B', qty: 80, pricePerKg: 19 },
      { item: 'Basmati Rice', grade: 'A', qty: 70, pricePerKg: 44.5 }
    ],
    serviceRadiusKm: 20
  },
  {
    id: 'S3',
    name: 'SpiceHarvest Traders',
    location: { lat: 18.9894, lon: 72.8401 }, // Fort
    stock: [
      { item: 'Turmeric Powder', grade: 'A', qty: 90, pricePerKg: 110 },
      { item: 'Red Chilli Powder', grade: 'A', qty: 50, pricePerKg: 150 },
      { item: 'Fresh Onions', grade: 'B', qty: 70, pricePerKg: 16 }
    ],
    serviceRadiusKm: 10
  },
  {
    id: 'S4',
    name: 'GreenRoots Wholesale',
    location: { lat: 19.0330, lon: 73.0297 }, // Navi Mumbai
    stock: [
      { item: 'Basmati Rice', grade: 'B', qty: 100, pricePerKg: 85 },
      { item: 'Potatoes', grade: 'B', qty: 120, pricePerKg: 14 },
      { item: 'Turmeric Powder', grade: 'B', qty: 60, pricePerKg: 110 }
    ],
    serviceRadiusKm: 25
  }
];

export default suppliers