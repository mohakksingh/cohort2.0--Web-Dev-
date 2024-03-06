import React from "react";
import { Appbar } from "./Appbar";
import { Blog } from "../hooks";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl">
          <div className="col-span-8 bg-red-200">
            <div className="text-5xl font-extrabold">{blog.title}</div>

            <div className="text-slate-500 pt-4">Post on 2nd De</div>
            <div className="pt-2">{blog.content}</div>
          </div>
          <div className="col-span-4 bg-green-200">hello</div>
        </div>
      </div>
    </div>
  );
};
