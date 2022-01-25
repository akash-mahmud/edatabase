import FileUploadIcon from "@mui/icons-material/FileUpload";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUpload } from "../api/register.api";



function Upload() {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [image1, setImage1] = useState();
  const [preview1, setPreview1] = useState();
  const [image2, setImage2] = useState();
  const [preview2, setPreview2] = useState();
  const [image3, setImage3] = useState();
  const [preview3, setPreview3] = useState();

  useEffect(() => {
    if (image) {
      console.log("yep");
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
      console.log(image);
    }
    if (image1) {
      console.log("yep2");
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview1(reader.result);
      };
      reader.readAsDataURL(image1);
      console.log(image1);
    }
    if (image2) {
      console.log("yep");
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview2(reader.result);
      };
      reader.readAsDataURL(image2);
      console.log(image2);
    }
    if (image3) {
      console.log("yep");
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview3(reader.result);
      };
      reader.readAsDataURL(image3);
      console.log(image3);
    } else {
      console.log("nope");
      setPreview(null);
    }
  }, [image, image1, image2, image3]);

  const fileInputRef = useRef();
  const fileInputRef1 = useRef();
  const fileInputRef2 = useRef();
  const fileInputRef3 = useRef();

  const nextPage = () => {
    var formData = new FormData();
    if(image && image1 && image2 && image3){
      let images = [image,image1,image2,image3]
      console.log(images)
      formData.append('photos', images)
      formData.append('userid', localStorage.getItem('userId'))
      getUpload('/users/upload_photos',formData)
      .then(data=>{
        console.log(data.data)
        navigate("/project-details");
      }).catch(err=>{
        console.log(err)
      })
    }else{
      navigate("/upload");
    }
  };
  const backPage = () => {
    navigate("/bio");
  };

  return (
    <div>
      <div class="upload">
        <h2>Upload your photos</h2>
        <div class="form">
          <div class="grid">
            <div className="form-element">
              {preview ? (
                <img
                  src={preview}
                  style={{ objectFit: "cover" }}
                  onClick={() => {
                    setImage(null);
                  }}
                  alt="4"
                />
              ) : (
                <button
                  className="upload-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  <FileUploadIcon fontSize="large" />
                </button>
              )}
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage(file);
                  } else {
                    setImage(null);
                  }
                }}
              />
            </div>
            <div className="form-element">
              {preview1 ? (
                <img
                  src={preview1}
                  style={{ objectFit: "cover" }}
                  onClick={() => {
                    setImage1(null);
                  }}
                  alt="4"
                />
              ) : (
                <button
                  className="upload-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef1.current.click();
                  }}
                >
                  <FileUploadIcon fontSize="large" />
                </button>
              )}
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef1}
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage1(file);
                  } else {
                    setImage1(null);
                  }
                }}
              />
            </div>
            <div className="form-element">
              {preview2 ? (
                <img
                  src={preview2}
                  style={{ objectFit: "cover" }}
                  onClick={() => {
                    setImage2(null);
                  }}
                  alt="4"
                />
              ) : (
                <button
                  className="upload-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef2.current.click();
                  }}
                >
                  <FileUploadIcon fontSize="large" />
                </button>
              )}
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef2}
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage2(file);
                  } else {
                    setImage2(null);
                  }
                }}
              />
            </div>
            <div className="form-element">
              {preview3 ? (
                <img
                  src={preview3}
                  style={{ objectFit: "cover" }}
                  onClick={() => {
                    setImage3(null);
                  }}
                  alt="4"
                />
              ) : (
                <button
                  className="upload-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef3.current.click();
                  }}
                >
                  <FileUploadIcon fontSize="large" />
                </button>
              )}
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef3}
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage3(file);
                  } else {
                    setImage3(null);
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div class="buttons">
          <input
            type="submit"
            class="send-otp back"
            value="BACK"
            onClick={backPage}
          />
          <input
            type="submit"
            class="send-otp next"
            value="NEXT"
            onClick={nextPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Upload;
