"use client";
import React, { useState } from 'react';
import './App.css';
import MindARViewer from '../../public/tsx/mindar-viewer';
import StationsInfo from '../../public/tsx/stations-info';

export default function App() {
  const [languaje, setLanguaje] = useState<"en" | "es">("es");

  return (
    <div className="App">
      <h1>{languaje === "es" ? "Escanea y pulsa las estaciones para ver estimaciones de tiempo" : "Scan and tap stations to see time estimates"}</h1>
      <div className="control-buttons">
      </div>
        <div className="container">
          <MindARViewer/>
          <StationsInfo/>
        </div>
    </div>
  );
}
