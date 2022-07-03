import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadForm from "./UploadForm";
import UploadsList from "./UploadsList";
import { BACKEND_URI } from "../config/constants";

export default function Video(props) {
    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white' : '#042743'

    }
    const [query, setQuery] = useState("");
    const [medias, setMedias] = useState([]);
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    useEffect(() => {
        getAllMedias();
    }, [query]);

    const getAllMedias = () => {
        axios
            .get(`${BACKEND_URI}/api/v1/media/all?q=${query}`)
            .then((result) => {
                setMedias(result.data);
            })
            .catch((error) => {
                setMedias([]);
                console.log(error);
                alert("Error happened!");
            });
    };
    return (

        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            {/* <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button>
</div> */}

            <div className="col-md-4">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
            </div>
            <div className="mt-5 col-md-12">

            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card" style={mystyle}>
                        <div className="card-body">
                            <UploadForm showAlert={props.showAlert} getAllMedias={getAllMedias} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <UploadsList medias={medias} mode={props.mode} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
