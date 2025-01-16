import React from 'react';

const HeaderBottom = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        borderBottom: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '20px',
      }}
    >
      {/* Zdjęcie produktu */}
      <img
        src="zdj.png" // Zmień na właściwy link do obrazu
        alt="Product"
        style={{
          width: '350px',
        //   height: '150px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginRight: '20px',
        }}
      />

      {/* Informacje o produkcie */}
      <div style={{ flex: 1 }}>
        <h2 style={{ margin: 0, color: '#2E7D32' }}>ECOPLASTOMER</h2>
        <p><strong>GTIN:</strong> 5906924338005</p>
        <p>
          <strong>Product Name:</strong>{' '}
          <span style={{ color: '#2E7D32' }}>ECOPLASTOMER PP 70 800kg</span>
        </p>
        <p><strong>Category:</strong> ECOPLASTOMER</p>
        <p><strong>Serial Number:</strong> -</p>
        <p><strong>Colour:</strong> -</p>
        <p><strong>Production date:</strong> -</p>
      </div>
    </div>
  );
};

export default HeaderBottom;
