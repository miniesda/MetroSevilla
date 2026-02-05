"use client";
import React, { Suspense } from 'react';
import './App.css';
import MindARViewer from '../../public/tsx/mindar-viewer';
import { useSearchParams } from "next/navigation"

function ARViewContent() {
  const searchParams = useSearchParams();
  const lang = searchParams?.get("lang") ?? "es";

  return (
    <div className="App">
      <h1>
        {lang === "es"
          ? "Escanea y pulsa las estaciones para ver estimaciones de tiempo, pulsa fuera para esconderlas"
          : "Scan and tap stations to see time estimates, tap outside to hide them"}
      </h1>
      <div className="control-buttons"></div>
      <div className="container">
        <MindARViewer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ARViewContent />
    </Suspense>
  );
}