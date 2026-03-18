import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import React from "react";

function VideoCard({ video }) {
  const { snippet, id } = video;

  const { data: videoStats } = useQuery({
    queryKey: ["videoStats", id.videoId],
    queryFn: () => fetchFromAPI(`/videos?part=statistics&id=${id.videoId}`),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const viewCount = videoStats?.items?.[0]?.statistics?.viewCount;
  const likeCount = videoStats?.items?.[0]?.statistics?.likeCount;

  return (
    <Link to={`/video/${id.videoId}`} className="block">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <img
          src={snippet.thumbnails.medium.url}
          alt={snippet.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-3">
          <h4 className="font-semibold text-sm line-clamp-2 mb-1 text-gray-900">
            {snippet.title}
          </h4>
          <p className="text-sm text-gray-600 mb-1">{snippet.channelTitle}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {viewCount && <span>{parseInt(viewCount).toLocaleString()} views</span>}
            {likeCount && <span>{parseInt(likeCount).toLocaleString()} likes</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;

