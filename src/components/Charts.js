import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Charts = () => {
  // Dane do wykresów kołowych
  const totalPlasticData = [{ name: "Used", value: 100 }];
  const biobasedPlasticData = [
    { name: "Biobased", value: 84 },
    { name: "Other", value: 16 },
  ];

  // Kolory wykresów
  const COLORS = ["#00C49F", "#FF8042"];

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
      {/* Nagłówek */}
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#2E7D32",
        }}
      >
        Traced Materials
      </h3>

      {/* Wykresy */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* Total Plastic */}
        <div style={{ textAlign: "center" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>
            Total Plastic
          </h4>
          <PieChart width={100} height={100}>
            <Pie
              data={totalPlasticData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={40}
              fill="#00C49F"
            >
              <Cell key="cell-0" fill={COLORS[0]} />
            </Pie>
            <Tooltip />
          </PieChart>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#00C49F" }}>
            100%
          </p>
        </div>

        {/* Biobased Plastic */}
        <div style={{ textAlign: "center" }}>
          <h4 style={{ fontSize: "16px", marginBottom: "10px" }}>
            Biobased Plastic
          </h4>
          <PieChart width={100} height={100}>
            <Pie
              data={biobasedPlasticData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={40}
              fill="#8884d8"
            >
              {biobasedPlasticData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#8884d8" }}>
            84%
          </p>
        </div>
      </div>

      {/* Szczegółowe dane */}
      <div style={{ marginTop: "20px", fontSize: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Total plastic:</p>
          <p style={{ fontWeight: "bold" }}>0.84 kg</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Biobased plastic:</p>
          <p style={{ fontWeight: "bold" }}>0.7056 kg</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Total weight:</p>
          <p style={{ fontWeight: "bold" }}>0.84 kg</p>
        </div>
      </div>
    </div>
  );
};

export default Charts;
