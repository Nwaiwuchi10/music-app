import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import Message from "../../../components/Messages/Message";
import { getMusicApi } from "../../../data/Apis";
import AdminLayout from "../../AdminDashboard/AdminLayout";
import "./AdminGetMusic.css";
import Loader from "../../../components/Loading/Loader";
import CircularIndeterminate from "../../../components/Loading/Progress";
const AdminGetMusic = () => {
  const { usery } = useParams();
  const apiEndPoint = "https://nowmusic.onrender.com/api/music/delete";
  const navigate = useNavigate();
  const [poster, setPoster] = useState([]);
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [show, setShow] = useState(false);

  const [loadings, setLoadings] = useState(false);
  const handleLoader = () => {
    setLoadings(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  const postDelete = (usery, e) => {
    e.preventDefault();
    setLoadings(true);
    axios
      .delete(`http://localhost:5000/api/music/delete/${usery.id}`)

      .then((res) => {
        setLoadings(false);
        console.log("Deleted!!!", res);
        // alert("Item has been removed");
        navigate("/ViewHallOfFame");
      })
      .catch((err) => {
        console.log(err);
        // alert("Failed to remove");
      });
  };
  const handleDeletes = async (usery, e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/music/delete/${usery?._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setDeleted(true);
      } else {
        throw new Error("Failed to delete item");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (id) => {
    await axios.delete(
      `https://todaysmusic.onrender.com/api/music/delete/${id}`
    );

    setPoster(poster.filter((p) => p._id !== usery._id));
    navigate("/ViewMusic");
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(getMusicApi);
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  return (
    <AdminLayout>
      <h3 className="text-center mb-4 mt-4">View All {poster.length} Music </h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>ARTIST</th>
              <th>TITLE</th>
              <th>CATEGORY</th>
              <th>GENRE</th>
              <th>Recommend Song</th>
            </tr>
          </thead>
          <tbody>
            {poster?.map((usery) => (
              <>
                <tr key={usery._id}>
                  <td data-label="S.img">
                    <img
                      src={usery?.image}
                      alt="jj"
                      style={{
                        width: "80px",
                        height: "8vh",
                        objectFit: "contain",
                      }}
                    />
                  </td>

                  <td data-label="S.artist">{usery?.artist}</td>

                  <td data-label="S.title"> {usery.title}</td>
                  <td data-label="S.category"> {usery.category}</td>
                  <td data-label="S.genre"> {usery.genre}</td>
                  <td data-label="S.Recommend"> {usery.recommendSong}</td>

                  <td data-label="S.edith/delete">
                    <Link to={`/edithNewsBlog/${usery._id}`}>
                      <Button variant="light" className="btn-sm">
                        <FaEdit />
                      </Button>
                    </Link>

                    <Button
                      // type="submit"
                      variant="danger"
                      className="btn-sm"
                      // onSubmit={handleLoader}
                      onClick={() => handleDelete(usery._id)}
                    >
                      <FaTrash />
                    </Button>

                    {/* {deleted && (
                      <p className="color-red">Item successfully deleted</p>
                    )} */}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  );
};

export default AdminGetMusic;
