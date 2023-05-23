import connectDB from "@/lib/connectDB";
import Blog from "@/schema/PostModel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  if (req.method === "POST") {
    try {
      const response = await Blog.create(req.body);
      res.status(200).json({
        response: true,
        message: `Blog Created Successfully`,
        data: response,
      });
    } catch (e) {
      res.status(500).json({ response: false, message: `${e}` });
    }
  } else if (req.method === "GET") {
    try {
      const response = await Blog.find().sort({ createdAt: -1 });
      res
        .status(200)
        .json({ response: true, message: `List of Blogs`, data: response });
    } catch (e) {
      res.status(500).json({ response: false, message: `${e}` });
    }
  }
}
