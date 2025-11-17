
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import homeStyles from './Home.module.css';

const products = [
  {
    name: 'ADHYAY 1',
    images: [
      '/assets/ADHYAYBAGWITHROBOT .png',
      '/assets/Adhyay front view.png',
      '/assets/Adhyaybaginsideview .jpg',
      '/assets/ADHYAY SIDE VIEW.png',
    ],
    desc: '• 100+ interfacing • Robotics and IOT application • Support TinyML algorithm • Both Wi-Fi and Bluetooth adaptable • Obstacle avoidance, object detection • Line following, cliff detection • Supports micropython, circuitpython • Modular structure-can function as 4 different microcontroller setups on one board Ideal for students, educators, and developers exploring robotics and embedded AI ',
    price: '₹12999.00',
    link: '#',
  },
  {
    name: 'PRAGATI',
    images: [
      '/assets/pragati box.png',
      // '/assets/sample-course.png',
      // '/assets/robot-main.png',
      // '/assets/adhyay1-1.png',
    ],
    desc: '• Build 20+ stem kit • Interchangeable and reusable parts • Hands on learning • DIY kits • Build and create with stem projects • Develop fine motor skills • 50 puzzle pieces • Science kit for kids • Integration with school curriculum • Educational gift for kids • Real world application • Creative thinking',
    price: '₹2999.00',
    link: '#',
  },
  {
    name: 'UDAAN',
    images: [
      '/assets/Udan.png',
      // '/assets/sample-course.png',
      // '/assets/robot-main.png',
      // '/assets/adhyay1-2.png',
    ],
    desc: '• Beginners friendly • 100+ interfacing possible • Interactive learning platform • Stem curriculum integration • Smart home automation • Customizable kit • Home security system • Light following robot • Remote control car • Plant watering system',
    price: '₹5999.00',
    link: '#',
  },
  // {
  //   name: 'ADHYAY 1 EXPANSION BOARD',
  //   images: [
  //     '/assets/expansion-board.png',
  //     '/assets/sample-course.png',
  //     '/assets/robot-main.png',
  //     '/assets/adhyay1-3.png',
  //   ],
  //   desc: 'The Adhyay Expansion Board is a versatile and modular interface designed to seamlessly connect and integrate various sensors, actuators, and modules with the Raspberry Pi Pico W microcontroller. This expansion board simplifies prototyping and experimentation, making it ideal for educational kits, robotics projects, and IoT applications.',
  //   price: '₹999.00',
  //   link: '#',
  // },
  // {
  //   name: 'ADHYAY 1 CHASSIS',
  //   images: [
  //     '/assets/chassis.png',
  //     '/assets/sample-course.png',
  //     '/assets/robot-main.png',
  //     '/assets/adhyay1-1.png',
  //   ],
  //   desc: 'The Adhyay 1 chassis features a main body with three mounts for ultrasonic sensors and one for a camera, enabling versatile robotic functions. Its modular design supports distance measurement and vision-based tasks.',
  //   price: '₹499.00',
  //   link: '#',
  // },
];


export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (selectedProduct !== null) {
      setMainImg(products[selectedProduct].images[0]);
    }
  }, [selectedProduct]);

  // Render product detail if a product is selected
  if (selectedProduct !== null) {
    const product = products[selectedProduct];
    const images = product.images;
    return (
      <div className={homeStyles['rigbetel-dark-bg']} style={{ position: 'relative', maxWidth: '100vw', minHeight: '100vh', overflowX: 'hidden', background: 'transparent', color: '#fff' }}>
        <div className={homeStyles.dotBg}></div>
        <div className={homeStyles.rightGlow}></div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', position: 'relative', zIndex: 2, background: 'none', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflowX: 'hidden' }}>
            <div style={{
              background: 'rgba(30, 20, 60, 0.98)',
              borderRadius: '24px',
              padding: '36px 36px 32px 36px',
              maxWidth: '900px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 8px 48px 0 #0008, 0 4px 32px rgba(0,0,0,0.45)',
              position: 'relative',
              gap: '32px',
              zIndex: 1,
              border: '1.5px solid rgba(255,255,255,0.07)',
              boxSizing: 'border-box',
              overflowX: 'hidden',
            }}>
              <button onClick={() => setSelectedProduct(null)} style={{
                position: 'absolute',
                top: 22,
                left: 22,
                background: 'linear-gradient(90deg, #ff6ad5 0%, #a685fa 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '16px',
                padding: '8px 28px',
                fontSize: '18px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(166,133,250,0.15)',
                zIndex: 2
              }}>&larr; Back</button>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 340, marginBottom: 12 }}>
                <div style={{ background: 'rgba(30,20,60,0.85)', borderRadius: '16px', width: 240, height: 240, margin: '0 0 18px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 16px #0004' }}>
                  <img src={mainImg} alt={product.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '12px', pointerEvents: 'none', userSelect: 'none', background: 'transparent', display: 'block', margin: '0 auto' }} />
                </div>
                {images.length > 1 && (
                  <div style={{ display: 'flex', gap: '12px', marginTop: 8 }}>
                    {images.map((img, idx) => (
                      <div key={idx} style={{ background: 'rgba(30,20,60,0.85)', borderRadius: '8px', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: mainImg === img ? '0 0 12px #7f5af0cc, 0 2px 8px #1a103d' : '0 1px 4px #1a103d', border: mainImg === img ? '2.5px solid #7f5af0' : '2.5px solid #2a174d', outline: mainImg === img ? '2px solid #00e0ff' : 'none', outlineOffset: mainImg === img ? '2px' : '0', cursor: 'pointer', transition: 'border 0.2s, box-shadow 0.2s' }} onClick={() => setMainImg(img)}>
                        <img
                          src={img}
                          alt={`thumb-${idx}`}
                          style={{
                            width: 38,
                            height: 38,
                            objectFit: 'contain',
                            borderRadius: '6px',
                            background: 'transparent',
                            pointerEvents: 'none',
                            userSelect: 'none',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ color: '#c084fc', fontSize: '2.3rem', fontWeight: 700, margin: '0 0 10px 0', letterSpacing: 1, textAlign: 'center' }}>{product.name}</h2>
                <div style={{ color: '#ffb300', fontWeight: 700, fontSize: '1.15rem', marginBottom: 10, textAlign: 'center' }}>Product Details</div>
                <ul style={{ marginBottom: '28px', color: '#fff', fontSize: '18px', lineHeight: '1.7', paddingLeft: 18, maxWidth: 500, textAlign: 'left' }}>
                  {product.desc.split('•').filter(Boolean).map((item, i) => (
                    <li key={i} style={{ marginBottom: 4 }}>{item.trim()}</li>
                  ))}
                </ul>
                {/* <div style={{ fontWeight: 'bold', fontSize: '23px', marginBottom: '22px', color: '#ffb300' }}>
                  Price: <span style={{ color: '#fff' }}>{product.price}</span>
                </div> */}
                <button
                  style={{
                    background: 'linear-gradient(90deg, #ff6ad5 0%, #a685fa 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '14px 44px',
                    fontSize: '20px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    marginTop: 8,
                    boxShadow: '0 2px 8px #a685fa44',
                    transition: 'background 0.2s',
                  }}
                  onClick={() => navigate('/order', { state: { product: product.name, price: product.price } })}
                >Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render product list if no product is selected
  return (
    <div className={homeStyles['rigbetel-dark-bg']} style={{ position: 'relative', maxWidth: '100vw', minHeight: '100vh', overflowX: 'hidden', background: 'transparent' }}>
        <div className={homeStyles.dotBg}></div>
        <div className={homeStyles.rightGlow}></div>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      <div className="products-section">
        <h2 className="products-title">Our Products</h2>
        <div className="products-list">
          {products.map((product, idx) => {
            const imgSrc = product.images && product.images.length > 0 ? product.images[0] : (product.image || '');
            return (
              <div className="product-card light-bg-box" key={idx}>
                <img src={imgSrc} alt={product.name} className="product-image" />
                <div className="product-details">
                  <div className="product-title">{product.name}</div>
                  <ul className="product-desc-list">
                    {product.desc.split('•').filter(Boolean).map((item, i) => (
                      <li key={i}>{item.trim()}</li>
                    ))}
                  </ul>
                  {/* <div className="product-price">Price: {product.price}</div> */}
                  <button className="product-btn" onClick={() => setSelectedProduct(idx)}>View Product</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}