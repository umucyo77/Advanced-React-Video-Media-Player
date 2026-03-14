import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "../components/VideoCard.jsx";
import Loader from "../components/Loader";

function Feed() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos"],
    queryFn: () => fetchFromAPI("/search?part=snippet&q=react&type=video"),
  });

  if (isLoading) return <Loader />;
  if (isError) return <h2>Error loading videos</h2>;

  return (
    <div className="video-grid">
      {data.items.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

export default Feed;