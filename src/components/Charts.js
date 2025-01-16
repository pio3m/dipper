import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Charts = () => {
  // Dane wykresu składu materiałowego
  const materialCompositionData = [
    { name: "Polypropylene", value: 90 }, // 90% polipropylen
    { name: "Recycled Tire Rubber", value: 10 }, // 10% guma z recyklingu
  ];

  // Kolory wykresu
  const COLORS = ["#4CAF50", "#FF9800"]; // Zielony dla polipropylenu, pomarańczowy dla gumy

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
        Material Composition
      </h3>

      {/* Wykres składu materiałowego */}
      <div style={{ textAlign: "center" }}>
        <PieChart width={240} height={240}>
          <Pie
            data={materialCompositionData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
          >
            {materialCompositionData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#4CAF50",
          }}
        >
          90% Polypropylene, 10% Recycled Tire Rubber
        </p>
      </div>

      {/* Szczegółowe dane */}
      <div
        style={{
          marginTop: "30px",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        <p>
          <strong>Polypropylene:</strong> 0.756 kg (90%)
        </p>
        <p>
          <strong>Recycled Tire Rubber:</strong> 0.084 kg (10%)
        </p>
        <p>
          <strong>Total weight:</strong> 0.84 kg
        </p>
      </div>
    </div>
  );
};

export default Charts;
