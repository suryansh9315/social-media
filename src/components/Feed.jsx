"use client";
import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <div className="col-span-2">
        <Stories />
        <Posts />
      </div>
      <div>
        <div className="fixed">
          <MiniProfile />
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Feed;
