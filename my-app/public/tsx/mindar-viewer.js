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
    <a-scene mindar-image="imageTargetSrc: https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/targets/targets.mind; maxTrack: 22" color-space="sRGB" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <img id="icon-metro" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/metro-icon.png" crossOrigin='anonymous'/>
        <img id="label-bg" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/label-bg.png" crossOrigin='anonymous'/>
        <img id="icon-tranvia" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/tran.svg"/>
        <img id="icon-bus" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/bus.svg"/>
        <img id="icon-parking" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/parking.svg"/>
        <img id="icon-cargador" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/cargador.svg"/>
        <img id="icon-bici" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/bici.svg"/>
        <img id="icon-cercanias" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/cercanias.svg"/>
        <img id="icon-patines" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/patines.svg"/>
        <img id="icon-aeropuerto" src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/aeropuerto.svg"/>
        </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <MapStation  id={1} name="Ciudad Expo" position="-0.4 -0.23 0" services={["patines", "bici", "parking", "bus"]}/>


        
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 1">
        <a-text value="¡Hola, Mundo!" color="#FF0000" position="0 0 0" rotation="0 0 0" scale="1 1 1"></a-text>
      </a-entity>
      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable" camera rotation wasd-controls> </a-camera>
    </a-scene>
  );
}
