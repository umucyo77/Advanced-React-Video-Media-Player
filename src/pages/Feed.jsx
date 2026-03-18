import { useQuery } from "@tanstack/react-query";
import React from "react";
import SideBar from "../components/SideBar";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

import { fetchFromAPI } from "../utils/fetchFromAPI";

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

function Feed({ selectedCategory, setSelectedCategory }) {
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos", selectedCategory],
    queryFn: () =>
      fetchFromAPI(
        `/search?part=snippet&q=${selectedCategory}&type=video`
  )
  });

  if (isLoading) return <Loader />;
  if (isError) return <h2 className="text-center text-red-500 p-4">Error loading videos</h2>;

  return (
    <div className="flex">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="flex-1 p-4">
        {/* Category Filter Pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data?.items?.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;

