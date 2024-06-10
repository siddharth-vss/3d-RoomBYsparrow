// CSS
import "./style.css";

// Libreries
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//Moduals
import {Lights} from "./lights"
import {Window,Inputs} from "./Events"
import {Model,Spider} from "./3dmodels"
import {Stage} from "./base"


// Global Variables
let mixer;
const canvas = document.querySelector("canvas.webgl");
const sizes = { width: window.innerWidth, height: window.innerHeight};
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
const controls = new OrbitControls(camera, canvas);

const renderer = new THREE.WebGLRenderer({
  // color:"#FFFFFF",
  canvas: canvas,
});

function  addMixer (model){
  mixer = new THREE.AnimationMixer(model);
}

// Additions 

camera.position.z = 3;
camera.position.y = 1;
scene.add(camera);
renderer.setSize(sizes.width, sizes.height);

// GLTF Variables
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);


// Functions

Lights(); Stage(); Model();
// Exports
export {gltfLoader,scene,camera,controls,renderer,mixer,addMixer,canvas,sizes};

// animate Loop to show Scene

const clock = new THREE.Clock();
const animate = () => {
  Window(); Inputs();
  if (mixer) {
    mixer.update(clock.getDelta());
  }
  renderer.render(scene, camera);
  controls.update();

  window.requestAnimationFrame(animate);
};
animate();