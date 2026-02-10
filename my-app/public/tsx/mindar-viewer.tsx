"use client"
import { useEffect } from 'react';
import MapStation from './mapStation';
import Assets from './assets';

export default function App() {
    useEffect(() => {
    require("aframe");
    require("mind-ar/dist/mindar-image-aframe.prod.js");
    require("aframe-layout-component");
  }, []);

  return (
    <a-scene mindar-image="imageTargetSrc: https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/targets/targets.mind; maxTrack: 8" color-space="sRGB" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          
          <Assets/>
    
          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
    
          <a-entity mindar-image-target="targetIndex: 0">
            <MapStation  id={1} name="Ciudad Expo" position="-0.4 -0.33 0" services={["bici", "patines", "bus", "parking"]}/>
    
            <MapStation  id={2} name="Cavaleri" position="-0.2 -0.15 0" services={["bici", "patines"]}/>
    
            <MapStation  id={3} name="San Juan Alto" position="0.05 0.2 0" services={["bici", "patines", "bus", "parking"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 1">
            <MapStation  id={4} name="San Juan Bajo" position="-0.35 -0.1 0" services={["bici", "patines", "bus", "cargador", "parking"]}/>

            <MapStation  id={5} name="Blas Infante" position="0.2 0.1 0" services={["bus"]} cambioTramo={true}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 2">
            <MapStation  id={6} name="P. Principes" position="-0.25 -0.2 0" services={["bici", "patines"]}/>

            <MapStation  id={7} name="Plaza Cuba" position="-0.15 -0.05 0" services={["bici"]}/>

            <MapStation  id={8} name="Puerta Jerez" position="0.05 0.1 0" services={["bici", "tranvia"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 3">
            <MapStation  id={9} name="Prado S.Sebastian" position="-0.18 -0.05 0" services={["bici", "bus", "tranvia"]}/>

            <MapStation  id={10} name="San Bernardo" position="0.1 -0.15 0" services={["bici", "bus", "tranvia", "cercanias"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 4">
            <MapStation  id={11} name="Nervion" position="-0.1 0.1 0" services={["aeropuerto"]}/>

            <MapStation  id={12} name="Gran Plaza" position="0.12 0 0" services={[]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 5">
            <MapStation  id={13} name="1 de Mayo" position="-0.03 0.2 0" services={[]}/>

            <MapStation  id={14} name="Amate" position="0 -0 0" services={[]}/>

            <MapStation  id={15} name="La Plata" position="0.05 -0.22 0" services={[]}/>

            <MapStation  id={16} name="Cocheras" position="0.1 -0.4 0" services={["bici", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 6">
            <MapStation  id={18} name="Pablo Olavide" position="0.1 0 0" services={["bici", "patines", "bus"]} cambioTramo={true}/>

            <MapStation  id={19} name="Condequinto" position="0.3 -0.3 0" services={["bici", "patines", "cargador", "parking"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 7">
            <MapStation  id={20} name="Montequinto" position="0.4 0.15 0" services={["patines"]}/>

            <MapStation  id={21} name="Europa" position="0.35 -0.05 0" services={["patines"]}/>

            <MapStation  id={22} name="Olivar de Quintos" position="0.25 -0.4 0" services={["bus", "parking"]}/>
          </a-entity>
          <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable" camera rotation wasd-controls> </a-camera>
        </a-scene>
  );
}