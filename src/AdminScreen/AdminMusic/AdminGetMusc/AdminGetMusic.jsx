import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../../components/Messages/Message";
import { getMusicApi } from "../../../data/Apis";
import AdminLayout from "../../AdminDashboard/AdminLayout";
import "./AdminGetMusic.css";
import Loader from "../../../components/Loading/Loader";
const AdminGetMusic = () => {
  const navigate = useNavigate();
  const [poster, setPoster] = useState([]);
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [show, setShow] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                  <td data-label="S.Recommend">
                    {" "}
                    {usery?.recommendSong === "true"}
                  </td>

                  <td data-label="S.edith/delete">
                    <Link to={`/edithNewsBlog/${usery._id}`}>
                      <Button variant="light" className="btn-sm">
                        <FaEdit />
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      //   onClick={handleShow}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                  {/* <Modal
                    style={{
                      marginTop: "50px",
                    }}
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div
                        style={{
                          display: "block",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <h3>Are you sure?</h3>
                        <h5
                          style={{
                            color: "gray",
                          }}
                        >
                          Do you really want to delete these records? This
                          process cannot be undone.
                        </h5>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <div
                        style={{
                          display: "block",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        {loadings && <CircularIndeterminate />}
                        <Button
                          variant="danger"
                          onClick={(e) => postDelete(usery._id, e)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Modal.Footer>
                  </Modal> */}
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
