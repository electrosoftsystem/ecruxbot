import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import './Product.css';

export default function OrderFormPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, price } = location.state || {};

  React.useEffect(() => {
    if (!product) {
      navigate('/products'); // fallback if accessed directly
    }
  }, [product, navigate]);

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', width: '100vw', background: 'transparent', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'rgba(30, 20, 60, 0.98)', borderRadius: 18, padding: 36, boxShadow: '0 4px 32px rgba(0,0,0,0.4)', textAlign: 'center' }}>
          <h2 style={{ color: '#c084fc', marginBottom: 16 }}>No product selected</h2>
          <p style={{ marginBottom: 24 }}>Please go to the products page and select a product to order.</p>
          <button onClick={() => navigate('/products')} style={{ background: 'linear-gradient(90deg, #ff6ad5 0%, #a685fa 100%)', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 32px', fontSize: '18px', fontWeight: 600, cursor: 'pointer' }}>Go to Products</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: 'transparent', color: '#fff', padding: 0, margin: 0 }}>
      <div className="products-dot-bg"></div>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '48px 0 32px 0' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'linear-gradient(90deg, #ff6ad5 0%, #a685fa 100%)', color: '#fff', border: 'none', borderRadius: '16px', padding: '8px 28px', fontSize: '18px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px rgba(166,133,250,0.15)', marginBottom: 24 }}>&larr; Back</button>
        <h2 style={{ color: '#c084fc', fontSize: '2.3rem', fontWeight: 700, margin: '0 0 10px 0', letterSpacing: 1 }}>Order: {product}</h2>
  {/* <div style={{ fontWeight: 'bold', fontSize: '23px', marginBottom: '22px', color: '#ffb300' }}>Price: <span style={{ color: '#fff' }}>{price}</span></div> */}
        <OrderForm product={product} price={price} onClose={() => navigate(-1)} isPage />
      </div>
    </div>
  );
}
