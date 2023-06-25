import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon,
  PaperAirplaneIcon,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
  FaceSmileIcon
} from "@heroicons/react/24/outline";

const Post = ({ post }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={post.avatar}
          alt=""
        />
        <p className="flex-1 font-semibold">{post.username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      <img className="object-contain w-full" src={post.img} alt="" />
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 truncate">
        <span className="font-semibold mr-1">{post.username} </span>{post.caption}
      </p>
      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input className="border-none flex-1 outline-none focus:ring-0" placeholder="Add a comment..." type="text" />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;
