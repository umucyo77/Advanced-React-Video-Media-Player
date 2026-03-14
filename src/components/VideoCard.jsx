import { Link } from "react-router-dom";

function VideoCard({ video }) {
  const { snippet, id } = video;

  return (
    <Link to={`/video/${id.videoId}`}>
      <div className="video-card">
        <img src={snippet.thumbnails.medium.url} />
        <h4>{snippet.title}</h4>
        <p>{snippet.channelTitle}</p>
      </div>
    </Link>
  );
}

export default VideoCard;