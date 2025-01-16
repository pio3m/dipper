import React from "react";

const EnvironmentalImpact = () => {
  const impactData = [
    { label: "Water consumption, per unit", value: "50 liters" },
    { label: "Recycled content, in %", value: "84%" },
    { label: "Chemical consumption, per unit", value: "1.2 kg" },
    { label: "GHG emissions of item of clothing produced", value: "8.5 kg CO2e" },
    { label: "CO2e emissions, per unit", value: "2.4 kg" },
    { label: "Minimum durability of the product, in years", value: "10 years" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        margin: "20px 0",
        textAlign: "center",
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
        Environmental Impact
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
        {impactData.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#333",
                margin: "0 0 5px",
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2E7D32",
                margin: 0,
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentalImpact;
