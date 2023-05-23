import React from "react";
import PostComponent from "./PostComponent";
import { BlogInterface } from "@/lib/model";

const MainView: React.FC<{ blogs: [BlogInterface] }> = ({ blogs }) => {
  return (
    <div className="bg-slate-800 bg-darkblue2 w-hundred text-center">
      {blogs.map((blog: BlogInterface) => (
        <PostComponent blog={blog} key={blog._id} />
      ))}
    </div>
  );
};

export default MainView;
