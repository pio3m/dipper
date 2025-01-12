import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        margin: "20px 0",
      }}
    >
      {/* Zdjęcie produktu */}
      <img
        src="zdj.png" // Zmień na prawdziwy link do zdjęcia produktu
        alt="Product"
        style={{
          width: "350px",
          // height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          marginRight: "20px",
        }}
      />

      {/* Informacje o produkcie */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: "bold",
            color: "#2E7D32",
          }}
        >
          ECOPLASTOMER
        </h2>
        <p style={{ margin: "10px 0", fontSize: "16px" }}>
          <strong>GTIN:</strong> 5906924338005
        </p>
        <p style={{ margin: "10px 0", fontSize: "16px" }}>
          <strong>Product Name:</strong>{" "}
          <span style={{ color: "#2E7D32", fontWeight: "bold" }}>
            ECOPLASTOMER PP 70 800kg
          </span>
        </p>
        <p style={{ margin: "10px 0", fontSize: "16px" }}>
          <strong>Category:</strong> ECOPLASTOMER
        </p>
        <p style={{ margin: "10px 0", fontSize: "16px" }}>
          <strong>Serial Number:</strong> -
        </p>
        <p style={{ margin: "10px 0", fontSize: "16px" }}>
          <strong>Colour:</strong> -
        </p>
        <p style={{ margin: "10px 0", fontSize: "16px" }}>
          <strong>Production date:</strong> -
        </p>
      </div>
    </div>
  );
};

export default Header;
