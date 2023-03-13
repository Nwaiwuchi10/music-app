import { Route, Routes } from "react-router-dom";
import AdminCreateMusic from "./AdminScreen/AdminMusic/AdminCreateMusic";
import AdminGetMusic from "./AdminScreen/AdminMusic/AdminGetMusc/AdminGetMusic";
import AdminVideoCreate from "./AdminScreen/AdminVideo/AdminVideoCreate";
import AdminViewVideo from "./AdminScreen/AdminVideo/AdminViewVideo";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import MusicDetails from "./screens/MusicDetailsScreen/MusicDetails";
import MusicVideoDetails from "./screens/MusicVideoDetails/MusicVideoDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Nchrys" element={<AdminCreateMusic />} />
        <Route path="/CreateVideo" element={<AdminVideoCreate />} />
        <Route path="/ViewMusic" element={<AdminGetMusic />} />
        <Route path="/ViewVideo" element={<AdminViewVideo />} />
        <Route path="/mp3-download/:id" element={<MusicDetails />} />
        <Route path="/mp4-download/:id" element={<MusicVideoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
