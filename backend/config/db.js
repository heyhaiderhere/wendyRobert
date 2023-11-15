import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(
      `Connection esteblished with ${connection.connection.host}`.bgCyan
    );
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

export default connectDb;
