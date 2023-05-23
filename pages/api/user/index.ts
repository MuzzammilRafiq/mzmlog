import connectDB from "@/lib/connectDB";
import User from "@/schema/UserModel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const response = await User.find();
      res
        .status(200)
        .json({ response: true, message: `List of Users`, data: response });
    } catch (e) {
      res.status(500).json({ response: false, message: `${e}` });
    }
  }
}
