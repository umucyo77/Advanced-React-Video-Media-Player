import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import ChannelCard from "../components/ChannelCard";
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
  if (channelError || videosError) return <h2>Error loading channel</h2>;

  const channel = channelData.items[0];

  return (
    <div>

      {/* Channel Info */}
      <ChannelCard channel={channel} />

      {/* Channel Videos */}
      <div className="video-grid">

        {videosData.items.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}

      </div>

    </div>
  );
}

export default ChannelDetails;