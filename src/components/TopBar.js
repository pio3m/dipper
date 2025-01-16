import React from "react";

const TopBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f4f4f4",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="ecoplast.png" 
          alt="Ecopolplast Logo"
          style={{
            width: "120px",
            height: "auto",
            marginBottom: "5px",
          }}
        />
        <span
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "grey",
            textAlign: "center",
          }}
        >
          Powered by <span style={{ fontSize: "16px", color: "green" }}>DiPPer</span>
        </span>
      </div>

      {/* Przyciski */}
      <div style={{ display: "flex", gap: "10px" }}>
        <a
          href="#login"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            color: "#fff",
            backgroundColor: "#2E7D32",
            borderRadius: "5px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E6B22";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#2E7D32";
          }}
        >
          LOGIN TO DiPPer
        </a>
        <a
          href="#digital-link"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            color: "#fff",
            backgroundColor: "#2E7D32",
            borderRadius: "5px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1E6B22";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#2E7D32";
          }}
        >
          DIGITAL LINK GS1
        </a>
      </div>
    </div>
  );
};

export default TopBar;
