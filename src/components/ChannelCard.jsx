import { Link } from "react-router-dom";

function ChannelCard({ channel }) {

  const {
    id,
    snippet,
    statistics
  } = channel;

  return (
    <div className="channel-card">
      <Link to={`/channel/${id.channelId || id}`}>
        
        <img
          src={snippet.thumbnails.high.url}
          alt={snippet.title}
          className="channel-avatar"
        />

        <h3>{snippet.title}</h3>

        {statistics && (
          <p>
            {parseInt(statistics.subscriberCount).toLocaleString()} Subscribers
          </p>
        )}

      </Link>
    </div>
  );
}

export default ChannelCard;