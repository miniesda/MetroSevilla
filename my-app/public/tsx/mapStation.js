"use client"
import StationsInfo from "./stations-info";
import React from "react";
import { useRef, useState } from 'react';


export default function MapStation(
  {id, position, services, name}
) {
    const [panelVisible, setPanelVisible] = useState(false)
    const handleClick = () => {
      setPanelVisible(true)
      setTimeout(() => window.addEventListener("touchstart", handleClickOutside), 100)
      
      console.log("click inside")
    }

    const handleClickOutside = (evt) => {
      setPanelVisible(false)
      window.removeEventListener("touchstart", handleClickOutside)
      console.log("click outside")
    }

    const minWidth = 0.1
    const charWidth = 0.03
    const padding = 0.1;
    const planeWidth = Math.max(
      minWidth,
      name.length * charWidth + padding
    );

    return (
        <a-image name={name} position={position} src="#icon-metro"  height="0.1" width="0.1" className="clickable" onclick={handleClick}>
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
            position="0 -0.08 0"
            layout="type: line; margin: 0.06"
          >
          {
            services.includes("tranvia") && <a-image src="#icon-tranvia" className="service-icon" width= "0.05" height= "0.05"><a-plane width="0.05" height="0.05" color="#FFFFFF"/></a-image>
          }
          {
            services.includes("bus")  && <a-image src="#icon-bus" className="service-icon" width= "0.05" height= "0.05"><a-plane width="0.05" height="0.05" color="#FFFFFF"/></a-image>
          }
          {
            services.includes("parking")  && <a-image src="#icon-parking" className="service-icon" width= "0.05" height= "0.05"><a-plane width="0.05" height="0.05" color="#FFFFFF"/></a-image>
          }
          {
            services.includes("cargador")  && <a-image src="#icon-cargador" className="service-icon" width= "0.05" height= "0.05"><a-plane width="0.05" height="0.05" color="#FFFFFF"/></a-image>
          }
          {
            services.includes("bici")  && <a-image src="#icon-bici" className="service-icon" width= "0.05" height= "0.05"><a-plane width="0.05" height="0.05" color="#FFFFFF"/></a-image>
          }
          {
            services.includes("cercanias")  && <a-image src="#icon-cercanias" className="service-icon" width= "0.05" height= "0.05"><a-plane width="0.05" height="0.05" color="#FFFFFF"/></a-image>
          }
          {
            services.includes("patines")  && <a-image src="#icon-patines" className="service-icon" width= "0.05" height= "0.05"><a-plane width="0.05" height="0.05" color="#FFFFFF"/></a-image>
          }
          {
            services.includes("aeropuerto")  && <a-image src="#icon-aeropuerto" className="service-icon" width= "0.05" height= "0.05"><a-plane width="0.05" height="0.05" color="#FFFFFF"/></a-image>
          }
          </a-entity>
          
          
        </a-image>
    );
}