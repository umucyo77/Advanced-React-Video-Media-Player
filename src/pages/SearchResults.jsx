import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import ChannelCard from "../components/ChannelCard";
import Loader from "../components/Loader";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function SearchResults() {
  const { searchTerm } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () =>
      fetchFromAPI(
        `/search?part=snippet&q=${searchTerm}`
      )
  });

  if (isLoading) return <Loader />;
  if (isError) return <h2 className="text-center text-red-500 p-4">Error loading search results</h2>;

  // Separate videos and channels
  const videos = data?.items?.filter(item => item.id.kind === "youtube#video") || [];
  const channels = data?.items?.filter(item => item.id.kind === "youtube#channel") || [];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Search Results for "{searchTerm}"</h1>

      {/* Videos Section */}
      {videos.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <VideoCard key={video.id.videoId} video={video} />
            ))}
          </div>
        </div>
      )}

      {/* Channels Section */}
      {channels.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Channels</h2>
          <div className="space-y-4">
            {channels.map((channel) => (
              <ChannelCard key={channel.id.channelId} channel={channel} />
            ))}
          </div>
        </div>
      )}

      {videos.length === 0 && channels.length === 0 && (
        <p className="text-center text-gray-500">No results found for "{searchTerm}"</p>
      )}
    </div>
  );
}

export default SearchResults;

