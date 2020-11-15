import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MONGO DB connected:---> ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error in DB connection : ${error.message}`);
    console.error(`Full ERROR: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
