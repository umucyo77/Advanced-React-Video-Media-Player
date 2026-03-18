# Advanced React Video Media Player

A production-grade YouTube-like video media player built with React, featuring API integration, responsive design, and modern performance optimizations.

## Features

- **YouTube API Integration**: Fetches videos, channels, and search results using YouTube v3 API via RapidAPI
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop with Tailwind CSS
- **Category Filtering**: Browse videos by categories with both sidebar and filter pills
- **Search Functionality**: Search for videos and channels with real-time results
- **Video Playback**: Embedded video player with fullscreen toggle
- **Channel Pages**: Dedicated pages for channel information and videos
- **Performance Optimized**: Uses TanStack Query for caching and efficient data fetching
- **Error Handling**: Graceful error handling for API failures and loading states

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS
- **API**: Axios for HTTP requests
- **State Management**: TanStack Query (React Query) for server state
- **Video Player**: React Player
- **Build Tool**: Vite
- **Icons**: Heroicons (via SVG)

## Project Structure

```
src/
├── components/
│   ├── ChannelCard.jsx      # Channel display component
│   ├── Loader.jsx           # Loading spinner
│   ├── Navbar.jsx           # Top navigation with search
│   ├── Search.jsx           # Search input component
│   ├── SideBar.jsx          # Category sidebar
│   ├── VideoCard.jsx        # Video thumbnail card
│   └── VideoPlayer.jsx      # Video player with fullscreen
├── pages/
│   ├── ChannelDetails.jsx   # Channel profile page
│   ├── Feed.jsx             # Main video feed
│   ├── SearchResults.jsx    # Search results page
│   └── VideoCardDetails.jsx # Video playback page
├── utils/
│   └── fetchFromAPI.js      # API utility with Axios
├── App.jsx                  # Main app component with routing
├── main.jsx                 # App entry point
└── index.css                # Global styles
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd video-media-player
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your RapidAPI key:
     ```
     REACT_APP_RAPID_API_KEY=your_rapidapi_key_here
     ```

4. **Get YouTube API Key**
   - Sign up for [RapidAPI](https://rapidapi.com/)
   - Subscribe to the [YouTube v3 API](https://rapidapi.com/ytdlfree/api/youtube-v3-alternative)
   - Copy your API key to the `.env` file

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

## API Usage

The app uses the YouTube v3 API through RapidAPI for:
- Searching videos and channels
- Fetching video details and statistics
- Getting channel information
- Retrieving related videos

All API calls are handled through the `fetchFromAPI` utility, which configures Axios with the base URL and authentication headers.

## Key Components

### Feed Page
- Displays videos in a responsive grid
- Category filtering via sidebar (desktop) and pills (all devices)
- Infinite scroll ready (can be extended)

### Video Details Page
- Full video player with custom controls
- Video metadata (title, views, likes)
- Related videos sidebar
- Channel information

### Channel Details Page
- Channel banner and avatar
- Subscriber and video counts
- Grid of channel videos

### Search Results
- Combined results for videos and channels
- Filterable by content type

## Performance Features

- **Caching**: TanStack Query caches API responses to avoid redundant requests
- **Lazy Loading**: Components load data only when needed
- **Optimized Re-renders**: Efficient state management prevents unnecessary updates
- **Responsive Images**: Appropriate thumbnail sizes for different screen sizes

## Responsive Design

- **Mobile**: Single column grid, hamburger menu for categories
- **Tablet**: 2-column grid, compact navigation
- **Desktop**: 3-4 column grid, sidebar navigation

## Error Handling

- API rate limit errors display user-friendly messages
- Network failures show appropriate error states
- Loading states with skeleton/spinner components

## Future Enhancements

- Video comments integration
- User authentication and playlists
- Video upload functionality
- Advanced search filters
- Dark mode toggle
- PWA capabilities

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is for educational purposes. Please respect YouTube's Terms of Service and API usage policies.
