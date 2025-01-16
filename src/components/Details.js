import React from "react";
import { useTheme } from "./ThemeContext"; // Import kontekstu dla trybu ciemnego

const Details = () => {
  const { isDarkMode } = useTheme(); // Pobranie informacji o trybie (ciemny/jasny)

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: isDarkMode ? "#333" : "#fff", // Tło zależne od trybu
        color: isDarkMode ? "#fff" : "#000", // Tekst zależny od trybu
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        margin: "20px 0",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: isDarkMode ? "#90caf9" : "#2E7D32", // Kolor tekstu nagłówka
        }}
      >
        Company Information
      </h3>
      <div style={{ marginBottom: "10px", fontSize: "20px" }}>
        <p style={{ margin: "10px 0" }}>
          <strong>Company:</strong> Ecopolplast Sp z.o.o
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Address:</strong>
        </p>
        <p
          style={{
            margin: "10px 0",
            paddingLeft: "20px",
            color: isDarkMode ? "#ddd" : "#555", // Lżejszy kolor tekstu dla adresu
          }}
        >
          Stanisława Wyspiańskiego 13A, 84-300 Lębork, Polska
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Production Site:</strong>
        </p>
        <p
          style={{
            margin: "10px 0",
            paddingLeft: "20px",
            color: isDarkMode ? "#ddd" : "#555", // Lżejszy kolor tekstu dla adresu
          }}
        >
          Chwaszczyńska 151E, 81-571 Gdynia
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Country:</strong> Poland
        </p>
      </div>
    </div>
  );
};

export default Details;
