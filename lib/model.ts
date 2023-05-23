import { Types, Document } from "mongoose";

export interface BlogModelInterface extends Document {
  title: string;
  slug: string;
  content: string;
  likeCount: number;
  comments: [string];
  userId: Types.ObjectId;
}

export interface UserModelInterface extends Document {
  name: string;
  email: string;
  image: string;
  emailVerified: string;
}

export type BlogInterface = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  likeCount: number;
  comments: [string];
  createdAt: string;
  updatedAt: string;
  userId: {
    _id: string,
    name: string
    email: string
    image: string
    emailVerified:string
  };
  __v: number;
};
