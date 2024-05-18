import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('Connected to DB');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongoose conntected');

    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
