import React from "react";
import { useTheme } from "./ThemeContext";

const HeaderBottom = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px",
        borderBottom: `1px solid ${isDarkMode ? "#555" : "#ddd"}`,
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <img
        src="zdj.png"
        alt="Product"
        style={{
          width: "350px",
          objectFit: "cover",
          borderRadius: "8px",
          marginRight: "20px",
        }}
      />
      <div style={{ flex: 1 }}>
        <h2 style={{ margin: 0, color: isDarkMode ? "#90caf9" : "#2E7D32" }}>
          ECOPLASTOMER
        </h2>
        <p>
          <strong>GTIN:</strong> 5906924338005
        </p>
        <p>
          <strong>Product Name:</strong>{" "}
          <span style={{ color: isDarkMode ? "#90caf9" : "#2E7D32" }}>
            ECOPLASTOMER PP 70 800kg
          </span>
        </p>
        <p>
          <strong>Category:</strong> ECOPLASTOMER
        </p>
        <p>
          <strong>Serial Number:</strong> -
        </p>
        <p>
          <strong>Colour:</strong> -
        </p>
        <p>
          <strong>Production date:</strong> -
        </p>
      </div>
    </div>
  );
};

export default HeaderBottom;
