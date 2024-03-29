import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CircularIndeterminate from "../../components/Loading/Progress";

import AdminLayout from "../AdminDashboard/AdminLayout";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SucessToast from "../../components/Toast/SucessToast";
import { getMusicVideoApi, getMusicsVideoApi } from "../../data/Apis";
const AdminVideoCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [videoDownload, setVideoDownload] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("");
  const [brand, setBrand] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("");
  const [filepath, setFilepath] = useState("");
  const [recommendSong, setRecommendSong] = useState(false);
  const [album, setAlbum] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  const uploadimage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convert2base64(file);
    setImage(base64);
    // setImage({ ...image, image: base64 });
    console.log(base64);
    // const reader = new FileReader();
  };
  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  //////music file
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setVideoDownload(reader.result);
    };
  };
  //////

  /////
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title: title,
      image: image,
      artist: artist,
      album: album,
      genre: genre,
      filepath: filepath,
      videoDownload: videoDownload,
      recommendSong: recommendSong,
      category: category,
      brand: brand,
      year: year,
      description: description,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(getMusicVideoApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setSuccess(false);
        if (res.data) {
          setTitle("");
          setVideoDownload("");
          setDescription("");
          setBrand("");
          setArtist("");
          setFilepath("");
          setRecommendSong("");
          setAlbum("");
          setCategory("");
          setImage("");
          setGenre("");
          setYear("");

          console.log(res.data);
          toast.success("post sucessful");
          setSuccess(data.success);
          navigate("/ViewVideo");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Failed to create a post, check your network connection or input the correct textfields"
        );
      });
  };
  return (
    <AdminLayout>
      <section class="h-100 h-custom" style={{ backgroundColor: "white" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-8 col-xl-6">
              <div class="card rounded-3">
                {/* <img
                    src={Sfc}
                    class="w-100"
                    style={{
                      borderTopLeftRadius: ".3rem",
                      borderTopRightRadius: ".3rem",
                      height: "20vh",
                      objectFit: "contain",
                    }}
                    alt="Sample photo"
                  /> */}
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
                    Create a Music Blog
                  </h3>
                  <p
                    class="d-flex justify-content-center"
                    style={{ marginLeft: "15px" }}
                  >
                    *pls all the blanck inputs are been required*
                  </p>
                  <form onSubmit={submitHandler}>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        id="outlined-required"
                        label="Title "
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Artist "
                        type="text"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Brand Name or Record Label "
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Genre "
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Category "
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="Album "
                        type="text"
                        value={album}
                        onChange={(e) => setAlbum(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        rows={4}
                        id="outlined-required"
                        label="DATE"
                        type="date"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        multiline
                        rows={4}
                        id="outlined-required"
                        label="Decription "
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              defaultChecked
                              checked={recommendSong}
                              onChange={(e) =>
                                setRecommendSong(e.target.checked)
                              }
                            />
                          }
                          label="Recomend Song"
                        />
                      </FormGroup>
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="">Cover Photo</label>
                      <TextField
                        className="input-label-input-divs"
                        required
                        id="outlined-required"
                        type="file"
                        multiple
                        accept=".jpeg, .png, .jpg, "
                        onChange={(e) => uploadimage(e)}
                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        // required
                        id="outlined-required"
                        label="Youtube Embed Link "
                        type="text"
                        onChange={(e) => setFilepath(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        id="outlined-required"
                        label="Upload Video "
                        type="file"
                        multiple
                        accept="video/*"
                        onChange={handleVideoChange}
                      />
                    </div>
                    {loading ? (
                      <CircularIndeterminate />
                    ) : (
                      <div
                        class="d-flex justify-content-center"

                        // onClick={handleLoader}
                      >
                        <Button
                          onSubmit={handleLoader}
                          type="submit"
                          variant="contained"
                        >
                          Upload
                        </Button>
                        <ToastContainer />
                      </div>
                    )}
                  </form>
                  {success && <SucessToast />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminVideoCreate;
