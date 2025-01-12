import React from "react";

const Details = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
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
          color: "#2E7D32",
        }}
      >
        Company Information
      </h3>
      <div style={{ marginBottom: "10px", fontSize: "16px" }}>
        <p style={{ margin: "10px 0" }}>
          <strong>Company:</strong> Ecopolplast Sp z.o.o
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Address:</strong>
        </p>
        <p style={{ margin: "10px 0", paddingLeft: "20px" }}>
          Stanisława Wyspiańskiego 13A, 84-300 Lębork, Polska
        </p>
        <p style={{ margin: "10px 0" }}>
          <strong>Production Site:</strong>
        </p>
        <p style={{ margin: "10px 0", paddingLeft: "20px" }}>
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
