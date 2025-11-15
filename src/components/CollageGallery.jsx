import React from "react";
import "./CollageGallery.css";

const images = [
//   "/assets/Galary1.heif",
//   "/assets/Galary1 (2).heif",
  "/assets/Galary2.jpg",
  "/assets/Galary3.png",
//   "/assets/Galary4.jpg",
//   "/assets/Galary5.png",
//   "/assets/Galary6.heif",
  "/assets/Galary7.jpg",
  "/assets/Galary8.png",
  "/assets/Galary9.jpg",
  "/assets/Galary10.png",
  "/assets/Galary11.jpg",
  "/assets/Galary12.jpg",
  "/assets/Galary13.jpg",
  "/assets/Galary14.jpg"
];

function CollageGallery() {
  return (
    <section className="collage-gallery-section">
      <h2 className="collage-gallery-title">Collage Gallery</h2>
      <div className="collage-gallery-grid">
        {/* Large top left */}
        <div className="collage-item collage-large">
          <img src={images[0]} alt="Gallery 1" />
        </div>
        {/* Medium top right */}
        <div className="collage-item collage-medium">
          <img src={images[1]} alt="Gallery 2" />
        </div>
        {/* Tall right */}
        <div className="collage-item collage-tall">
          <img src={images[2]} alt="Gallery 3" />
        </div>
        {/* Wide bottom left */}
        <div className="collage-item collage-wide">
          <img src={images[3]} alt="Gallery 4" />
        </div>
        {/* Square bottom right */}
        <div className="collage-item collage-square">
          <img src={images[4]} alt="Gallery 5" />
        </div>
      </div>
    </section>
  );
}

export default CollageGallery;
