import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

import { fetchFromAPI } from "../utils/fetchFromAPI";

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos", selectedCategory],
    queryFn: () =>
      fetchFromAPI(
        `/search?part=snippet&q=${selectedCategory}&type=video`
      )
  });

  if (isLoading) return <Loader />;
  if (isError) return <h2>Error loading videos</h2>;

  return (
    <div style={{ display: "flex" }}>

      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="video-grid">

        {data.items.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}

      </div>

    </div>
  );
}

export default Feed;