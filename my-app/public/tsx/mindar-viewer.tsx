"use client"
import { useEffect } from 'react';
import MapStation from './mapStation';

export default function App() {
    useEffect(() => {
    require("aframe");
    require("mind-ar/dist/mindar-image-aframe.prod.js");
  }, []);

  return (
    <a-scene mindar-image="imageTargetSrc: https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/targets/targets.mind; maxTrack: 8" color-space="sRGB" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          <a-assets>
            <img id="icon-metro" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/metro-icon.png" crossOrigin='anonymous'/>
            <img id="label-bg" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/label-bg.png" crossOrigin='anonymous'/>
            <img id="icon-tranvia" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/tran.svg" crossOrigin='anonymous'/>
            <img id="icon-bus" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/bus.svg" crossOrigin='anonymous'/>
            <img id="icon-parking" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/parking.svg" crossOrigin='anonymous'/>
            <img id="icon-cargador" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/cargador.svg" crossOrigin='anonymous'/>
            <img id="icon-bici" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/bici.svg" crossOrigin='anonymous'/>
            <img id="icon-cercanias" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/cercanias.svg" crossOrigin='anonymous'/>
            <img id="icon-patines" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/patines.svg" crossOrigin='anonymous'/>
            <img id="icon-aeropuerto" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/aeropuerto.svg" crossOrigin='anonymous'/>
            </a-assets>
    
          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
    
          <a-entity mindar-image-target="targetIndex: 0">
            <MapStation  id={1} name="Ciudad Expo" position="-0.4 -0.23 0" services={["patines", "bici", "parking", "bus"]}/>
    
            <MapStation  id={2} name="Cavaleri" position="-0.3 -0.05 0" services={["patines", "bici"]}/>
    
            <MapStation  id={3} name="San Juan Alto" position="0.05 0.3 0" services={["tranvia", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 1">
            <MapStation  id={4} name="San Juan Bajo" position="0 0 0" services={["tranvia", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 2">
            <MapStation  id={4} name="San Juan Bajo" position="0 0 0" services={["tranvia", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 3">
            <MapStation  id={4} name="San Juan Bajo" position="0 0 0" services={["tranvia", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 4">
            <MapStation  id={4} name="San Juan Bajo" position="0 0 0" services={["tranvia", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 5">
            <MapStation  id={4} name="San Juan Bajo" position="0 0 0" services={["tranvia", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 6">
            <MapStation  id={4} name="San Juan Bajo" position="0 0 0" services={["tranvia", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 7">
            <MapStation  id={4} name="San Juan Bajo" position="0 0 0" services={["tranvia", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable" camera rotation wasd-controls> </a-camera>
        </a-scene>
  );
}