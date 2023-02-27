import { Route, Routes } from "react-router-dom";
import AdminCreateMusic from "./AdminScreen/AdminMusic/AdminCreateMusic";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import MusicDetails from "./screens/MusicDetailsScreen/MusicDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Nchrys" element={<AdminCreateMusic />} />
        <Route path="/mp3-download/:id" element={<MusicDetails />} />
      </Routes>
    </div>
  );
}

export default App;
