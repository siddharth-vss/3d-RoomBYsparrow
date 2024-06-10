import * as THREE from "three";
import { camera, canvas, controls, mixer, renderer, scene, sizes } from "../script"

const Window  = ()=>{
    window.addEventListener("dblclick", () => {
        if (!document.fullscreenElement) {
          canvas.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      });
      
      window.addEventListener("resize", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
      
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
      
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });
}



export { Window }




// const cursor = { x: 0, y: 0 };
// window.addEventListener("mousemove", (event) => {
//   cursor.x = event.clientX / sizes.width - 0.5;
//   cursor.y = -(event.clientY / sizes.width - 0.5);
// });