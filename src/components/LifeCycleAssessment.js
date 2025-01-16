import React from "react";

const LifeCycleAssessment = () => {
//   const { isDarkMode } = useTheme();

  // Przykładowe dane LCA
  const lcaData = [
    { stage: "Pozyskanie surowców", impact: "Wysoki", description: "Znaczne zużycie zasobów naturalnych i energii." },
    { stage: "Produkcja", impact: "Średni", description: "Emisje gazów cieplarnianych i zużycie wody." },
    { stage: "Dystrybucja", impact: "Niski", description: "Emisje z transportu i opakowań." },
    { stage: "Użytkowanie", impact: "Niski", description: "Zużycie energii podczas użytkowania." },
    { stage: "Utylizacja", impact: "Średni", description: "Odpady i potencjalne zanieczyszczenie środowiska." },
  ];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor:  "#333",
        color: "#fff",
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
          color: "#90caf9",
        }}
      >
        Ocena Cyklu Życia Produktu (LCA)
      </h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: `2px solid #555`, padding: "10px" }}>Etap</th>
            <th style={{ borderBottom: `2px solid #555`, padding: "10px" }}>Wpływ</th>
            <th style={{ borderBottom: `2px solid #555}`, padding: "10px" }}>Opis</th>
          </tr>
        </thead>
        <tbody>
          {lcaData.map((item, index) => (
            <tr key={index}>
              <td style={{ borderBottom: `2px solid #555`, padding: "10px" }}>{item.stage}</td>
              <td style={{ borderBottom: `2px solid #555`, padding: "10px" }}>{item.impact}</td>
              <td style={{ borderBottom: `2px solid #555`, padding: "10px" }}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LifeCycleAssessment;
