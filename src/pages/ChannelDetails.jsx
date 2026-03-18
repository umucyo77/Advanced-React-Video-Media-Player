import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import React from "react";

import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

function ChannelDetails() {
  const { id } = useParams();

  // fetch channel details
  const {
    data: channelData,
    isLoading: channelLoading,
    isError: channelError
  } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => fetchFromAPI(`/channels?part=snippet,statistics&id=${id}`)
  });

  // fetch channel videos
  const {
    data: videosData,
    isLoading: videosLoading,
    isError: videosError
  } = useQuery({
    queryKey: ["channelVideos", id],
    queryFn: () =>
      fetchFromAPI(
        `/search?channelId=${id}&part=snippet&order=date&type=video`
      )
  });

  if (channelLoading || videosLoading) return <Loader />;
  if (channelError || videosError) return <h2 className="text-center text-red-500 p-4">Error loading channel</h2>;

  const channel = channelData?.items?.[0];
  if (!channel) return <h2 className="text-center text-gray-500 p-4">Channel not found</h2>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Channel Banner */}
      {channel.snippet.thumbnails.high && (
        <div className="w-full h-48 bg-linear-to-r from-red-500 to-pink-500 rounded-lg mb-6 overflow-hidden">
          <img
            src={channel.snippet.thumbnails.high.url}
            alt={channel.snippet.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Channel Info */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src={channel.snippet.thumbnails.high.url}
          alt={channel.snippet.title}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{channel.snippet.title}</h1>
          <p className="text-gray-600">
            {parseInt(channel.statistics.subscriberCount).toLocaleString()} subscribers •
            {parseInt(channel.statistics.videoCount).toLocaleString()} videos
          </p>
          <p className="text-gray-700 mt-2">{channel.snippet.description}</p>
        </div>
      </div>

      {/* Channel Videos */}
      <h2 className="text-xl font-semibold mb-4">Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videosData?.items?.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
}

export default ChannelDetails;

