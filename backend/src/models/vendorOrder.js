import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  grade: { type: String, default: 'A' },
  price: { type: Number, required: true }
});

const vendorOrderSchema = new mongoose.Schema({
  vendorId: { type: String, required: true },
  vendorName: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true }
  },
  deliveryTime: { type: Date, required: true },
  items: [itemSchema]
}, { timestamps: true });

export default mongoose.model('VendorOrder', vendorOrderSchema);
