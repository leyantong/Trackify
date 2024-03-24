import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('MongoDB connection failed.', err.message);
    process.exit(1);
  }
};

export default connectDB;