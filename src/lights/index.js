import * as THREE from "three";
import {scene} from "../script.js"

export const Lights =() =>{

    
    const directionalLight = new THREE.DirectionalLight();
    scene.add(directionalLight);
    
    
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 5, 10);
    
    const spLight = new THREE.SpotLight(0xffffff);
    spLight.position.set(2, 5, -5);
    
    const spLight2 = new THREE.SpotLight(0xffffff);
    spLight2.position.set(2, 5, -5);
    
    scene.add(spLight);
    scene.add(spotLight);
}

