import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex p-6 space-x-3 mt-8 bg-white border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story key={session?.user?.uid} profile={{ username: session?.user?.username, avatar: session?.user?.image }} />
      )}
      {suggestions.map((profile) => (
        <Story key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default Stories;
