import React from "react";
import { useTheme } from "./ThemeContext";

const TopBar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Pobieramy tryb i funkcję zmiany skórki

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: isDarkMode ? "#333" : "#f4f4f4", // Tło dynamicznie zmieniane
        color: isDarkMode ? "#fff" : "#000",
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
            textAlign: "center",
            color: isDarkMode ? "#90caf9" : "grey", // Kolor dynamicznie zmieniany
          }}
        >
          Powered by <span style={{ fontSize: "16px", color: isDarkMode ? "#90caf9" : "green" }}>DiPPer</span>
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
        {/* Przycisk przełączania trybu */}
        <button
          onClick={toggleTheme}
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            color: isDarkMode ? "#000" : "#fff",
            backgroundColor: isDarkMode ? "#90caf9" : "#4CAF50",
            borderRadius: "5px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = isDarkMode ? "#78bce2" : "#3e8e41";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = isDarkMode ? "#90caf9" : "#4CAF50";
          }}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
