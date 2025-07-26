import React, { useState } from "react";
import "./Portfolio.css";
import img1 from "../../assets/imgs/poert1.png";
import img2 from "../../assets/imgs/port2.png";
import img3 from "../../assets/imgs/port3.png";

export default function Portfolio() {
  const [previewSrc, setPreviewSrc] = useState(null);

  const images = [img1, img2, img3, img1, img2, img3];

  function previewImg(src) {
    setPreviewSrc(src);
  }

  function closeImg() {
    setPreviewSrc(null);
  }

  return (
    <>
      <section
        id="portfolio"
        className="min-vh-100 d-flex justify-content-center align-items-center mt-3 mb-5"
      >
        <div className="container mt-5">
          <div className="title mt-5">
            <h1 className="text-center display-6 fw-bold t-color">
              PORTFOLIO COMPONENT
            </h1>

            <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
              <div id="line"></div>
              <i className="fa fa-solid fa-star t-color"></i>
              <div id="line"></div>
            </div>
          </div>

          <div className="row g-4 mt-3">
            {images.map((img, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="card overflow-hidden rounded-3 position-relative"
                  onClick={() => previewImg(img)}
                >
                  <img
                    src={img}
                    className="img-fluid"
                    alt={`portfolio ${index + 1}`}
                  />

                  <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                    <i className="fa fa-solid fa-plus fa-5x text-white"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {previewSrc && (
          <div
            className="preview-img d-flex justify-content-center align-items-center bg-info bg-opacity-25 position-fixed top-0 start-0 w-100 vh-100"
            onClick={closeImg}
          >
            <img
              id="img-preview"
              src={previewSrc}
              alt="preview img"
              className="w-50 mt-5 rounded-3"
            />
          </div>
        )}
      </section>
    </>
  );
}
