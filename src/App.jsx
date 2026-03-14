import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import VideoCardDetails from "./pages/VideoCardDetails";
import ChannelDetails from "./pages/ChannelDetails";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoCardDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;