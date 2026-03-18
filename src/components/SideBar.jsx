import React from "react";
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

function SideBar({ selectedCategory, setSelectedCategory, onCategorySelect }) {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (onCategorySelect) onCategorySelect();
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? "bg-red-100 text-red-600 font-medium"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

