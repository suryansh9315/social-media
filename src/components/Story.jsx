import React from "react";

const Story = ({ profile }) => {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full border-red-500 border-2 cursor-pointer object-contain p-[1.5px] hover:scale-110 transition transform duration-200 ease-out"
        src={profile.avatar}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{profile.username}</p>
    </div>
  );
};

export default Story;
