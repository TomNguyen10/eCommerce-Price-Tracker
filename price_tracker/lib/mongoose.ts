import mongoose from "mongoose";
import { isElement } from "react-dom/test-utils";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URI) {
    return console.error("Missing MONGO_URL!!!");
  }
  if (isConnected) {
    console.log("=> using existing database connection");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Database connected successfully");
  } catch (error: any) {
    console.error("Error connecting to database: ", error);
  }
};
