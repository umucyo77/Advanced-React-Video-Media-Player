import { Link } from "react-router-dom";

function ChannelCard({ channel, showLink = true }) {
  const {
    id,
    snippet,
    statistics
  } = channel;

  const channelId = id.channelId || id;

  const cardContent = (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <img
        src={snippet.thumbnails.high.url}
        alt={snippet.title}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{snippet.title}</h3>
        {statistics && (
          <p className="text-sm text-gray-600">
            {parseInt(statistics.subscriberCount).toLocaleString()} subscribers
          </p>
        )}
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link to={`/channel/${channelId}`}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

export default ChannelCard;

