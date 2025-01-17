import React from "react";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Pobranie trybu i funkcji zmiany trybu

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        margin: "20px 0",
      }}
    >
      {/* Pusta przestrzeń po lewej stronie */}
      <div style={{ width: "100px" }}></div>

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
            color: isDarkMode ? "#90caf9" : "#2E7D32",
          }}
        >
          Digital Product Passport
        </h1>
      </div>

      {/* Prawa strona: QR Code i przełącznik */}
      <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
        
        <img
          src="https://quickchart.io/qr?text=Digital+Product+Passport&size=150"
          alt="QR Code"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
