import { BlogModelInterface } from "@/lib/model";
import { model, models, Types, Schema } from "mongoose";

const BlogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    comments: {
      type: [String],
    },
    userId: {
      type: Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
  },
  {
    timestamps: true,
    collection: "Blog",
  }
);
const Blog = models.Blog || model<BlogModelInterface>("Blog", BlogSchema);

export default Blog;
