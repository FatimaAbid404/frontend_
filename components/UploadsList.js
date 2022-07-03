import React from "react";
import { BACKEND_URI } from "../config/constants";

const UploadsList = (props) => {
  let mystyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    border:'2px solid',
    borderColor:props.mode==='dark'?'white':'#042743'

  }
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table" style={mystyle}>
          <thead>
            <tr >
              <th width="200">Name</th>
              <th width="200">keywords</th>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {props.medias &&
              props.medias.map((media) => {
                return (
                  <tr>
                    <td>{media.name}</td>
                    <td>{media.keywords}</td>
                    <td>
                      {media.videos.map((video) => {
                        return (
                          <video
                            preload="auto"
                            width="320"
                            height="240"
                            controls
                          >
                            <source src={`${BACKEND_URI}${video}`} />
                            ;Your browser does not support the video tag.
                          </video>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadsList;