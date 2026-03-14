import { useState } from "react";

const categories = [
  "All",
  "Coding",
  "Music",
  "Gaming",
  "Live",
  "Sports",
  "Education",
  "News",
  "Technology",
  "Movies"
];

function Sidebar({ selectedCategory, setSelectedCategory }) {

  return (
    <div className="sidebar">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active-category" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;