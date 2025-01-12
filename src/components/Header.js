import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        margin: "20px 0",
      }}
    >
      {/* Lewa strona: QR Code */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://quickchart.io/qr?text=Digital+Product+Passport&size=150" // Działający QR Code API
          alt="QR Code"
          style={{
            width: "100px",
            height: "100px",
            marginRight: "20px",
            borderRadius: "8px",
          }}
        />
      </div>

      {/* Środkowa część: Duży napis */}
      <div
        style={{
          textAlign: "center",
          flex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            margin: 0,
            color: "#2E7D32",
          }}
        >
          Digital Product Passport
        </h1>
      </div>

      {/* Pusta przestrzeń po prawej stronie */}
      <div style={{ width: "100px" }}></div>
    </div>
  );
};

export default Header;
