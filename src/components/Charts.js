import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useTheme } from "./ThemeContext";

const Charts = () => {
  const { isDarkMode } = useTheme();

  const materialCompositionData = [
    { name: "Polypropylene", value: 90 },
    { name: "Recycled Tire Rubber", value: 10 },
  ];

  const COLORS = ["#4CAF50", "#FF9800"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
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
          color: isDarkMode ? "#90caf9" : "#2E7D32",
        }}
      >
        Material Composition
      </h3>

      <PieChart width={240} height={240}>
        <Pie
          data={materialCompositionData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
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
          color: isDarkMode ? "#90caf9" : "#4CAF50",
          marginTop: "20px",
        }}
      >
        90% Polypropylene, 10% Recycled Tire Rubber
      </p>

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
