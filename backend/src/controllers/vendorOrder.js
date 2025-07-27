import VendorOrder from '../models/vendorOrder.js';

// Controller to handle order creation
export const createOrder = async (req, res) => {
  try {
    const {
      vendorId,
      vendorName,
      location,
      deliveryTime,
      items
    } = req.body;

    if (!vendorId || !vendorName || !location || !items || !deliveryTime) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'At least one item is required' });
    }

    const newOrder = new VendorOrder({
      vendorId,
      vendorName,
      location,
      deliveryTime,
      items
    });

    await newOrder.save();

    res.status(201).json({
      message: 'Order placed successfully',
      order: newOrder
    });
  } catch (err) {
    console.error('Error saving vendor order:', err);
    res.status(500).json({
      error: 'Server error while placing order',
      details: err.message
    });
  }
};
