import { Route, Routes } from "react-router-dom";
import AdminCreateMusic from "./AdminScreen/AdminMusic/AdminCreateMusic";
import AdminGetMusic from "./AdminScreen/AdminMusic/AdminGetMusc/AdminGetMusic";
import AdminVideoCreate from "./AdminScreen/AdminVideo/AdminVideoCreate";
import AdminViewVideo from "./AdminScreen/AdminVideo/AdminViewVideo";
import "./App.css";
import HomePage from "./pages/Home/HomePage";

import ContactUs from "./pages/ContactUs/ContactUs";
import AllMusic from "./pages/AllMusicPage/AllMusic";
import AllVideo from "./pages/AllVideos/AllVideo";
import AdminUpdateMusic from "./AdminScreen/AdminMusic/AdminUpdateMusic/AdminUpdateMusic";
import AdminUpdateVideo from "./AdminScreen/AdminVideo/AdminUpdate";
import MusicDetails from "./screens/MusicDetailsScreen/MusicDetails";
import MusicVideoDetails from "./screens/MusicVideoDetails/MusicVideoDetail";
import UpdateMusicImageCover from "./AdminScreen/AdminMusic/AdminUpdateMusic/UpdateMusicImageCover";
import UpdateMusicImage from "./AdminScreen/AdminVideo/UpdateMusicImage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Nchrys" element={<AdminCreateMusic />} />
        <Route path="/musics" element={<AllMusic />} />
        <Route path="/videos" element={<AllVideo />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/CreateVideo" element={<AdminVideoCreate />} />
        <Route path="/ViewMusic" element={<AdminGetMusic />} />
        <Route path="/ViewVideo" element={<AdminViewVideo />} />
        <Route path="/mp3-download/:artist/:title" element={<MusicDetails />} />
        <Route path="/edithImage/:id" element={<UpdateMusicImageCover />} />
        <Route path="/edithImageVideo/:id" element={<UpdateMusicImage />} />
        <Route path="/edithMusic/:id" element={<AdminUpdateMusic />} />
        <Route path="/edithVideo/:id" element={<AdminUpdateVideo />} />
        <Route
          path="/mp4-download/:artist/:title"
          element={<MusicVideoDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
