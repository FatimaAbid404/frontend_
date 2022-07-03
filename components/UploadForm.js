import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";
import Alert from "./Alert";


export default function UploadForm (props) {
  const [name, setName] = useState("");
  const [keywords, setkeywords] = useState("");
  const [videos, setVideos] = useState([]);
  // const[alert,setAlert]=useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  //  setTimeout(() =>{
  //   setAlert(null);
  //  },1500);
  // }

  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }

    formdata.append("name", name);
    formdata.append("keywords", keywords);

    axios
      .post(`${BACKEND_URI}/api/v1/media/create`, formdata)
      .then((success) => {
        props.getAllMedias();
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
      // showAlert("Light mode has been enabled","success");
       props.showAlert("video Uploaded","success");
  };

  return (
    <>
      <form onSubmit={hadleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="keywords">keywords</label>
          <input
            type="text"
            name="keywords"
            id="keywords"
            className="form-control"
            onChange={(e) => setkeywords(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

// export default UploadForm;