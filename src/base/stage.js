import * as THREE from "three";
import { scene } from "../script"

import starsTexture from "../img/stars.jpg";
export  const Stage = () => {
 
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
  ]);


  const axesHelper = new THREE.AxesHelper(30);
  scene.add(axesHelper);

  const planeGeomatry = new THREE.PlaneGeometry(15, 15);
  const planeMatirial = new THREE.MeshBasicMaterial({
    color: "#01BAEF",
    // map:texture.load( pos ),
    side: THREE.DoubleSide,
    // wireframe: true
  });
  const planeMatirial2 = new THREE.MeshBasicMaterial({
    color: "red",
    // map:texture.load( pos ),
    side: THREE.DoubleSide,
    // wireframe: true
  });
  const plane = new THREE.Mesh(planeGeomatry, planeMatirial);
  const plane2 = new THREE.Mesh(planeGeomatry, planeMatirial2);
  scene.add(plane);
  // scene.add(plane2);

  plane.rotateX(-Math.PI / 2);
  plane2.position.z = -2.5;
  plane2.position.y = 2.5;
};
