
import { Routes, Route } from "react-router-dom";
import { Layout, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Feed />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="channel/:id" element={<ChannelDetail />} />
        <Route path="search/:searchterm" element={<SearchFeed />} />
      </Route>
    </Routes>
  );
}

export default App;
