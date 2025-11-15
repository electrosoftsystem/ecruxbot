
import React, { useState } from "react";
import "./Gallery.css";

const images = [
  "/assets/Galary2.jpg",
  "/assets/Galary3.png",
  "/assets/Galary4.jpg",
  "/assets/Galary5.png",
  // "/assets/Galary6.heif",
  "/assets/Galary7.jpg",
  "/assets/Galary8.png",
  "/assets/Galary9.jpg",
  "/assets/Galary10.png",
  "/assets/Galary11.jpg",
  "/assets/Galary12.jpg",
  "/assets/Galary13.jpg",
  "/assets/Galary14.jpg",
];


const Gallery = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (src) => setModalImg(src);
  const closeModal = () => setModalImg(null);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={src} alt={`Gallery ${idx + 1}`} className="gallery-img" />
            <div className="gallery-overlay" onClick={() => openModal(src)} style={{cursor:'pointer'}}>
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {modalImg && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <img src={modalImg} alt="Large view" className="gallery-modal-img" />
            <button className="gallery-modal-close" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
