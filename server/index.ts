import mongoose from "mongoose";
import {Nitro} from 'nitropack';
const config = useRuntimeConfig();

export default async (_nitroApp: Nitro) => {
  mongoose.connect(config.MONGO_URI, () => {
    console.log("Connected to MongoDB");
  });
};
