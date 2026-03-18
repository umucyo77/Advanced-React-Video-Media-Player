import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoPlayer from "../components/VideoPlayer";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function VideoCardDetails() {
  const { id } = useParams();

  // Fetch video details
  const { data: videoData, isLoading: videoLoading, isError: videoError } = useQuery({
    queryKey: ["video", id],
    queryFn: () => fetchFromAPI(`/videos?part=snippet,statistics&id=${id}`)
  });

  // Fetch related videos
  const { data: relatedData, isLoading: relatedLoading } = useQuery({
    queryKey: ["related", id],
    queryFn: () => fetchFromAPI(`/search?part=snippet&relatedToVideoId=${id}&type=video`)
  });

  if (videoLoading) return <Loader />;
  if (videoError) return <h2 className="text-center text-red-500 p-4">Error loading video</h2>;

  const video = videoData?.items?.[0];
  if (!video) return <h2 className="text-center text-gray-500 p-4">Video not found</h2>;

  const { snippet, statistics } = video;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Video Section */}
        <div className="lg:col-span-2">
          <VideoPlayer videoId={id} />
          <div className="mt-4">
            <h1 className="text-xl font-bold text-gray-900 mb-2">{snippet.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>{parseInt(statistics.viewCount).toLocaleString()} views</span>
              <span>{parseInt(statistics.likeCount).toLocaleString()} likes</span>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold text-gray-900 mb-2">{snippet.channelTitle}</h3>
              <p className="text-gray-700 whitespace-pre-line">{snippet.description}</p>
            </div>
          </div>
        </div>

        {/* Related Videos */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Related Videos</h3>
          {relatedLoading ? (
            <Loader />
          ) : (
            <div className="space-y-4">
              {relatedData?.items?.slice(0, 10).map((video) => (
                <VideoCard key={video.id.videoId} video={video} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoCardDetails;

