import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";

const SankeyDiagram = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 800;
    const height = 400;

    // Dane dla Sankey Diagram
    const data = {
      nodes: [
        { name: "Circular TPE" },
        { name: "Polypropylene" },
        { name: "Recycled Tire Rubber" },
        { name: "Final Product" },
      ],
      links: [
        // { source: 0, target: 3, value: 100, material: "100% recycled materials" },
        { source: 1, target: 3, value: 70, material: "70% polypropylene" },
        { source: 2, target: 3, value: 30, material: "30% recycled tire rubber" },
      ],
    };

    // Generator Sankey
    const sankeyGenerator = sankey()
      .nodeWidth(60)
      .nodePadding(60)
      .extent([
        [20, 20],
        [width - 10, height - 10],
      ]);

    const { nodes, links } = sankeyGenerator({
      nodes: data.nodes.map((d) => ({ ...d })),
      links: data.links.map((d) => ({ ...d })),
    });

    // Tworzenie SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Czyszczenie SVG
    svg.selectAll("*").remove();

    // Rysowanie linków
    svg
      .append("g")
      .selectAll("path")
      .data(links)
      .join("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("fill", "none")
      .attr("stroke", (d) => d3.interpolateCool(d.value / 100))
      .attr("stroke-width", (d) => Math.max(1, d.width))
      .attr("opacity", 0.8);

    // Dodawanie etykiet do linków
    svg
      .append("g")
      .selectAll("text")
      .data(links)
      .join("text")
      .attr("x", (d) => (d.source.x1 + d.target.x0) / 2)
      .attr("y", (d) => (d.source.y0 + d.source.y1) / 2)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "#555")
      .text((d) => d.material);

    // Rysowanie węzłów
    svg
      .append("g")
      .selectAll("rect")
      .data(nodes)
      .join("rect")
      .attr("x", (d) => d.x0)
      .attr("y", (d) => d.y0)
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
      .attr("stroke", "#333");

    // Dodawanie etykiet do węzłów
    svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", (d) => (d.x0 + d.x1) / 2)
      .attr("y", (d) => d.y0 - 10)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("fill", "#333")
      .text((d) => d.name);
  }, []);

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
        Material Flow
      </h3>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default SankeyDiagram;
