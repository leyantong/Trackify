import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  version: String,
  artist: String,
  isrc: { type: String, required: true },
  pLine: String,
  aliases: [String],
  contract: { type: mongoose.Schema.Types.ObjectId, ref: 'Contract' }
});

export const Track = mongoose.model('Track', trackSchema);
