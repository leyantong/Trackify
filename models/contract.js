import mongoose from 'mongoose';

const contractSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

export const Contract = mongoose.model('Contract', contractSchema);
