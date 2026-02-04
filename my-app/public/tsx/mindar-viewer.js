"use client";
import React, { useEffect, useState } from 'react';

export default function MindARViewer() {
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [aframeLoaded, setAframeLoaded] = useState(false);

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
      } catch (e) {
        console.error('Failed to dynamically import aframe', e);
      }
    })();

    
  }, []);

  if (!aframeLoaded || !pluginLoaded) return <div>Loading AR...</div>;

  return (
    <a-scene mindar-image="imageTargetSrc: ../targets/targets.mind; maxTrack: 22" color-space="sRGB" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <img id="icon-metro" src="../img/metro-icon.png"/>
        <img id="label-bg" src="../img/label-bg.png"/>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-image name="ciudadExpo" position="-0.4 -0.23 0" src="#icon-metro"  height="0.15" width="0.15" class="clickable">
          <a-plane
            name="ciudadExpo"
            src="#label-bg"
            width="0.55"
            height="0.12"
            position="0.4 0 0"
            material="transparent: true"
            class="clickable"
          >
            <a-text value="Ciudad Expo" name="ciudadExpo" position="-0.25 0 0.01" color="#FFFFFF" width="2" class="clickable"/>
          </a-plane>
          
        </a-image>


        
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 1">
        <a-text value="¡Hola, Mundo!" color="#FF0000" position="0 0 0" rotation="0 0 0" scale="1 1 1"></a-text>
      </a-entity>
      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable" camera rotation wasd-controls> </a-camera>
    </a-scene>
  );
}
