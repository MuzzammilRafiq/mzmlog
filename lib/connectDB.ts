import mongoose from "mongoose";
const url: string = process.env.MONGODB_URI || "";
export default async () => mongoose.connect(url);
