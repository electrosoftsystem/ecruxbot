import React, { useState } from 'react';

export default function OrderForm({ product, price, onClose, isPage }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    pin: '',
    delivery: 'Cash On Delivery',
  // price: price.replace('₹', ''),
    product: product,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle order submission here
    alert('Order submitted!');
    if (onClose) onClose();
  };

  return (
    <div
      style={
        isPage
          ? { width: '100%', background: 'none', boxShadow: 'none', padding: 0, margin: 0, display: 'block', position: 'static' }
          : {
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(20,10,40,0.85)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'auto',
              padding: '24px 8px',
            }
      }
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'linear-gradient(135deg, #1a103d 0%, #2a174d 100%)',
          borderRadius: 22,
          padding: 36,
          minWidth: 320,
          maxWidth: 420,
          width: '100%',
          boxShadow: isPage ? '0 2px 12px #0004' : '0 4px 32px #0008',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          position: 'relative',
          color: '#fff',
          margin: isPage ? '0 auto' : undefined,
          marginTop: isPage ? 24 : undefined,
          marginBottom: isPage ? 24 : undefined,
          maxHeight: isPage ? 'none' : '95vh',
          overflowY: isPage ? 'visible' : 'auto',
        }}
      >
        {!isPage && (
          <button
            type="button"
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 12,
              right: 16,
              background: 'transparent',
              border: 'none',
              fontSize: 28,
              color: '#c084fc',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        )}
        <h2 style={{ textAlign: 'center', color: '#c084fc', marginBottom: 8, fontWeight: 700 }}>Buy {product}</h2>
        <label style={labelStyle}>Name:<input name="name" value={form.name} onChange={handleChange} required style={inputStyle} /></label>
        <label style={labelStyle}>Email:<input name="email" value={form.email} onChange={handleChange} required style={inputStyle} /></label>
        <label style={labelStyle}>Contact No:<input name="contact" value={form.contact} onChange={handleChange} required style={inputStyle} /></label>
        <label style={labelStyle}>Address:<textarea name="address" value={form.address} onChange={handleChange} required style={{ ...inputStyle, minHeight: 60 }} /></label>
        <label style={labelStyle}>Pin Code:<input name="pin" value={form.pin} onChange={handleChange} required style={inputStyle} /></label>
        <label style={labelStyle}>Delivery Mode:<select name="delivery" value={form.delivery} onChange={handleChange} style={inputStyle} disabled><option>Cash On Delivery</option></select></label>
  {/* <label style={labelStyle}>Price In INR:<input name="price" value={form.price} readOnly style={inputStyle} /></label> */}
        <label style={labelStyle}>Product:<input name="product" value={form.product} readOnly style={inputStyle} /></label>
        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #ff6ad5 0%, #a685fa 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            padding: '14px 0',
            fontSize: 20,
            fontWeight: 600,
            marginTop: 8,
            cursor: 'pointer',
            boxShadow: '0 2px 8px #a685fa44',
            transition: 'background 0.2s',
          }}
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1.5px solid #c084fc',
  fontSize: 16,
  marginTop: 4,
  marginBottom: 2,
  background: 'rgba(30,20,60,0.7)',
  color: '#fff',
  outline: 'none',
  boxShadow: '0 1px 4px #0002',
};

const labelStyle = {
  fontWeight: 500,
  color: '#fff',
  fontSize: 16,
  marginBottom: 2,
};
