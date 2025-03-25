import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //    If The Database Is Alerdy Connected Dont Connect Again
  if (connected) {
    console.log("Mongo DB Is Connected");
    return;
  }

  //  Connect To MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
