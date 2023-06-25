import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Post from "./Post";

const Posts = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      img: faker.image.url(),
      caption: faker.person.bio(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div>
      {suggestions.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
