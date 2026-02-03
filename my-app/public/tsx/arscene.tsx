import React from "react";

export default function ARScene() {
    return (
        <div>
            <header>
                <h1>Scan stations</h1>
            </header>
            
            <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
            <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v7.0.0/dist/aframe-extras.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js"></script>
            
            <a-scene mindar-image="imageTargetSrc: ./targets/targets.mind; maxTrack: 22"
             color-space="sRGB" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
            <a-assets>
                <img id="icon-metro" src="./img/metro-icon.png"/>
                <img id="label-bg" src="./img/label-bg.png"/>
            </a-assets>

            <a-camera position={{x:0,y:0,z:0}} look-controls="enabled: false"></a-camera>

            <a-entity mindar-image-target="targetIndex: 0">
                <a-image name="ciudadExpo" position={{x:-0.4, y:-0.23, z:0}} src="#icon-metro"  height="0.15" width="0.15" class="clickable">
                <a-plane
                    name="ciudadExpo"
                    src="#label-bg"
                    width="0.55"
                    height="0.12"
                    position={{x:0.4, y:0, z:0}}
                    material="transparent: true"
                    class="clickable"
                >
                    <a-text value="Ciudad Expo" name="ciudadExpo" position={{x:-0.25, y:0, z:0.01}} color="#FFFFFF" width="2" class="clickable"/>
                </a-plane>
                </a-image>
            </a-entity>



            </a-scene>
        </div>
    );
}