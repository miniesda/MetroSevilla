"use client";
import React, { useEffect, useState } from 'react';
import MapStation from "./mapStation"

export default function MindARViewer() {
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [aframeLoaded, setAframeLoaded] = useState(false);
  const [layoutLoaded, setLayoutLoaded] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    (async () => {
      try {
        if (!window.AFRAME) {
          await import('aframe');
        }
        setAframeLoaded(true);

        const src = 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js';
        if (document.querySelector(`script[src="${src}"]`)) {
          setPluginLoaded(true);
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => setPluginLoaded(true);
        script.onerror = (e) => console.error('Failed to load MindAR script', e);
        document.head.appendChild(script);

        const src2 = 'https://unpkg.com/aframe-layout-component@5.3.0/dist/aframe-layout-component.min.js';
        if (document.querySelector(`script[src="${src2}"]`)) {
          setLayoutLoaded(true);
          return;
        }
        const script2 = document.createElement('script');
        script2.src = src2;
        script2.async = true;
        script2.onload = () => setPluginLoaded(true);
        script2.onerror = (e) => console.error('Failed to load layout script', e);
        document.head.appendChild(script2);


      } catch (e) {
        console.error('Failed to dynamically import aframe', e);
      }
    })();

    
  }, []);

  if (!aframeLoaded || !pluginLoaded) return <div>Loading AR...</div>;

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
    
            <MapStation  id={3} name="San Juan Alto" position="0.05 0.3 0" services={["bus", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 1">
            <MapStation  id={4} name="San Juan Bajo" position="-0.2 0 0" services={["bus", "bici", "parking", "patines"]}/>

            <MapStation  id={5} name="Blas Infante" position="0.2 0.15 0" services={["bus"]} cambioTramo={true}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 2">
            <MapStation  id={6} name="P. Principes" position="-0.25 -0.1 0" services={["bici", "patines"]}/>

            <MapStation  id={7} name="Plaza Cuba" position="-0.15 0.05 0" services={["bici"]}/>

            <MapStation  id={8} name="Puerta Jerez" position="0.05 0.2 0" services={["bici", "tranvia"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 3">
            <MapStation  id={9} name="Prado S.Sebastian" position="-0.18 0.05 0" services={["tranvia", "bici", "bus"]}/>

            <MapStation  id={10} name="San Bernardo" position="0.1 -0.05 0" services={["tranvia", "bici", "bus", "cercanias"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 4">
            <MapStation  id={11} name="Nervion" position="-0.1 0.2 0" services={["aeropuerto"]}/>

            <MapStation  id={12} name="Gran Plaza" position="0.12 0.1 0" services={[]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 5">
            <MapStation  id={13} name="1 de Mayo" position="-0.03 0.3 0" services={[]}/>

            <MapStation  id={14} name="Amate" position="0 0.07 0" services={[]}/>

            <MapStation  id={15} name="La Plata" position="0.05 -0.12 0" services={[]}/>

            <MapStation  id={16} name="Cocheras" position="0.1 -0.3 0" services={["bici", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 6">
            <MapStation  id={17} name="Pablo Olavide" position="0.1 0.1 0" services={["bus", "bici", "patines"]} cambioTramo={true}/>

            <MapStation  id={18} name="Condequinto" position="0.3 -0.2 0" services={["cargador", "bici", "parking", "patines"]}/>
          </a-entity>
          <a-entity mindar-image-target="targetIndex: 7">
            <MapStation  id={19} name="Montequinto" position="0.4 0.25 0" services={["patines"]}/>

            <MapStation  id={20} name="Europa" position="0.35 0.05 0" services={["patines"]}/>

            <MapStation  id={21} name="Olivar de Quintos" position="0.25 -0.3 0" services={["bus", "parking"]}/>
          </a-entity>
          <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable" camera rotation wasd-controls> </a-camera>
        </a-scene>
  );
}
