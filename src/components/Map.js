import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/poland/poland.json";

const Map = () => {
  // Lokalizacje z tooltipami
  const locations = [
    {
      name: "Warszawa",
      coordinates: [21.0122, 52.2297], // Longitude, Latitude
      description: "Dystrybucja produktu",
    },
    {
      name: "Lębork",
      coordinates: [17.7500, 54.5333], // Longitude, Latitude
      description: "Produkcja produktu",
    },
    {
      name: "Gdynia",
      coordinates: [18.548, 54.5189],
      description: "Lokalizacja fabryki",
    },
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
        Map of Product Locations
      </h3>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [19, 52], // Centrum Polski
          scale: 2500,
        }}
        width={800}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Import geometrii Polski */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#E0E0E0",
                    outline: "none",
                  },
                  hover: {
                    fill: "#D5D5D5",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#BFBFBF",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* Markery */}
        {locations.map(({ name, coordinates, description }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={6} fill="#FF5722" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                fill: "#333",
                transform: "translate(0, 25px)",
              }}
            >
              {name}
            </text>
            <title>{description}</title> {/* Tooltip */}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
