"use client"
import StationsInfo from "./stations-info";
import React from "react";
import { useRef, useState, useEffect } from 'react';


type Service =
  | "tranvia"
  | "bus"
  | "parking"
  | "cargador"
  | "bici"
  | "cercanias"
  | "patines"
  | "aeropuerto";

const serviceIcons: Record<Service, string> = {
  tranvia: "#icon-tranvia",
  bus: "#icon-bus",
  parking: "#icon-parking",
  cargador: "#icon-cargador",
  bici: "#icon-bici",
  cercanias: "#icon-cercanias",
  patines: "#icon-patines",
  aeropuerto: "#icon-aeropuerto",
};

interface MapStationProps {
  id: string | number;
  position: string; // ej: "0 0 0"
  services: Service[];
  name: string;
  cambioTramo?: boolean;
}

export default function MapStation({
  id,
  position,
  services,
  name,
  cambioTramo = false,
}: MapStationProps) {

    const [panelVisible, setPanelVisible] = useState<string>("false");
    const handleClick = () => {
      setPanelVisible("true")
      setTimeout(() => {
        window.addEventListener("touchstart", handleClickOutside);
      }, 100);
      
      //console.log("click inside")
    }

    const handleClickOutside = (_evt: TouchEvent) => {
      setPanelVisible("false")
      window.removeEventListener("touchstart", handleClickOutside)
      //console.log("click outside")
    }

    const minWidth = 0.1
    const charWidth = 0.03
    const padding = 0.1;
    const planeWidth = Math.max(
      minWidth,
      name.length * charWidth + padding
    );

    return (
        <a-image name={name} position={position} src={"#icon-"+ id}  height="0.1" width="0.1" className="clickable" onclick={handleClick}>
          <StationsInfo id={id} visible={panelVisible} />
          <a-plane
            name={name}
            src="#label-bg"
            width= {planeWidth}
            height="0.075"
            position={ (planeWidth/2 + 0.05) + " 0 0"}
            material="transparent: true"
            className="clickable"
            align="left"
          >
            <a-text value={name} name={name} align="center" position="0 0 0.01" color="#FFFFFF" width="1.5" className="clickable" onclick={handleClick}/>
          </a-plane>
          <a-entity
            position="0 -0.09 0"
            layout="type: line; margin: 0.06"
          >
          {
            services.map(service => (
                <a-image key={service} src={serviceIcons[service]} width="0.06" height="0.06">
                </a-image>
            ))
          }

          </a-entity>

          {
            cambioTramo && <a-plane width="0.3" height="0.05" color="#000000" position="0.1 0.08 0">
                <a-text value="Salto de tramo" color="#FFFFFF" align="center" position="0 0 0.01" width="1"/>
            </a-plane>
          }
          
        </a-image>
    );
}