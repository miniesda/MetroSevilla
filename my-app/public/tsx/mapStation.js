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

    return (
        <a-image name={name} position={position} src="#icon-metro"  height="0.15" width="0.15" className="clickable" onclick={handleClick}>
          <StationsInfo id={id} visible={panelVisible} />
          <a-plane
            name={name}
            src="#label-bg"
            width="0.55"
            height="0.12"
            position="0.4 0 0"
            material="transparent: true"
            className="clickable"
          >
            <a-text value={name} name={name} position="-0.25 0 0.01" color="#FFFFFF" width="2" className="clickable" onclick={handleClick}/>
          </a-plane>
          <a-entity
            position="0 -0.13 0"
            layout="type: line; margin: 0.1"
          >
          {
            services.includes("tranvia") && <a-image src="#icon-tranvia" className="service-icon" width= "0.075" height= "0.075"/>
          }
          {
            services.includes("bus")  && <a-image src="#icon-bus" className="service-icon" width= "0.075" height= "0.075"/>
          }
          {
            services.includes("parking")  && <a-image src="#icon-parking" className="service-icon" width= "0.075" height= "0.075"/>
          }
          {
            services.includes("cargador")  && <a-image src="#icon-cargador" className="service-icon" width= "0.075" height= "0.075"/>
          }
          {
            services.includes("bici")  && <a-image src="#icon-bici" className="service-icon" width= "0.075" height= "0.075"/>
          }
          {
            services.includes("cercanias")  && <a-image src="#icon-cercanias" className="service-icon" width= "0.075" height= "0.075"/>
          }
          {
            services.includes("patines")  && <a-image src="#icon-patines" className="service-icon" width= "0.075" height= "0.075"/>
          }
          {
            services.includes("aeropuerto")  && <a-image src="#icon-aeropuerto" className="service-icon" width= "0.075" height= "0.075"/>
          }
          </a-entity>
          
          
        </a-image>
    );
}