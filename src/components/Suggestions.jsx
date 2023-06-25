import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      company: faker.company.name(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      {
        suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center justify-between mt-3">
            <img className="w-10 h-10 rounded-full border p-[2px]" src={suggestion.avatar} alt="" />
            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">{suggestion.username}</h2>
              <h3 className="text-xs text-gray-400">Works at {suggestion.company}</h3>
            </div>
            <button className="text-blue-400 text-xs font-bold">Follow</button>
          </div>
        ))
      }
    </div>
  );
};

export default Suggestions;
