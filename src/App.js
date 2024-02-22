import { Route, Routes, useLocation } from "react-router-dom";
import AdminCreateMusic from "./AdminScreen/AdminMusic/AdminCreateMusic";
import AdminGetMusic from "./AdminScreen/AdminMusic/AdminGetMusc/AdminGetMusic";
import AdminVideoCreate from "./AdminScreen/AdminVideo/AdminVideoCreate";
import AdminViewVideo from "./AdminScreen/AdminVideo/AdminViewVideo";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import ReactGA from "react-ga";
import ContactUs from "./pages/ContactUs/ContactUs";
import AllMusic from "./pages/AllMusicPage/AllMusic";
import AllVideo from "./pages/AllVideos/AllVideo";
import AdminUpdateMusic from "./AdminScreen/AdminMusic/AdminUpdateMusic/AdminUpdateMusic";
import AdminUpdateVideo from "./AdminScreen/AdminVideo/AdminUpdate";
import MusicDetails from "./screens/MusicDetailsScreen/MusicDetails";
import MusicVideoDetails from "./screens/MusicVideoDetails/MusicVideoDetail";
import UpdateMusicImageCover from "./AdminScreen/AdminMusic/AdminUpdateMusic/UpdateMusicImageCover";
import UpdateMusicImage from "./AdminScreen/AdminVideo/UpdateMusicImage";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Sitemap from "./sitemap";
import Search from "./components/Search/Search";
import UploadMusic from "./screens/UploadMusicScreen/UploadMusic";
import SocialHandles from "./components/Socialhandles/SocialHandles";
import DJMix from "./pages/DJMIX/DJMix";
import MusicUpload from "./pages/Uploadmusic/MusicUpload";
import MusicUploads from "./screens/UploadYourSong/MusicUploads";
import MusicvideoUpload from "./screens/UploadYourSong/Musicvideo";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Initialize Google Analytics with your tracking ID 5768118828
    ReactGA.initialize("5984105243");

    // Send a pageview event to Google Analytics
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Todaysmuzik</title>
        <link
          rel="sitemap"
          type="application/xml"
          href="https://todaysmuzik.com.ng/sitemap.xml" // Replace with the actual path to your sitemap file
        />
        <Sitemap />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Nchrys" element={<AdminCreateMusic />} />
        <Route path="/musics" element={<AllMusic />} />
        <Route path="/videos" element={<AllVideo />} />
        <Route path="/upload-music" element={<MusicUpload />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/CreateVideo" element={<AdminVideoCreate />} />
        <Route path="/ViewMusic" element={<AdminGetMusic />} />
        {/* <Route path="/uploadmusic" element={<UploadMusic />} /> */}
        <Route path="/ViewVideo" element={<AdminViewVideo />} />
        <Route path="/dj-mixtape" element={<DJMix />} />
        <Route
          path="/mp3-download/:artist/:title/"
          element={<MusicDetails />}
        />
        <Route path="/edithImage/:id" element={<UpdateMusicImageCover />} />
        <Route path="/edithImageVideo/:id" element={<UpdateMusicImage />} />
        <Route path="/edithMusic/:id" element={<AdminUpdateMusic />} />
        <Route path="/edithVideo/:id" element={<AdminUpdateVideo />} />
        <Route
          path="/mp4-download/:artist/:title"
          element={<MusicVideoDetails />}
        />
        <Route path="/music-upload" element={<MusicUploads />} />
        <Route path="/Create-Video-Blog" element={<MusicvideoUpload />} />
      </Routes>
    </div>
  );
}

export default App;
