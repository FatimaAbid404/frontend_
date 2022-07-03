import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadForm from "./UploadForm";
import UploadsList from "./UploadsList";
import { BACKEND_URI } from "../config/constants";

export default function Display() {

    const [query, setQuery] = useState("");
    const [medias, setMedias] = useState([]);


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

        <div className="container">
{/* 
            <input className="search" placeholder="Search..." onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
            <div className="row">
                <div className="col-md-6">
                    <div className="card" style={{ height: "auto",width: "800px", margin: "40px", border: "1px solid black"}}>
                        <div className="card-body">
                            <UploadForm getAllMedias={getAllMedias} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={{height: "auto",width: "800px", margin: "40px", border: "1px solid black"}}>
                        <div className="card-body">
                            <UploadsList medias={medias}/>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        
    
)
                    }    
      
