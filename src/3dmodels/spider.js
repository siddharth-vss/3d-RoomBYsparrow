import { gltfLoader, scene, mixer, addMixer } from "../script.js";
// import pos from "./img/sp.jpg";

let Spider;

const Model = () => {
  gltfLoader.load("spider/scene.gltf", (gltf) => {
    console.log(gltf);
    const model = gltf.scene;
    model.position.y += 0.2;
    

  

    scene.add(model);
    addMixer(model);
    Spider = {
      sprint: mixer.clipAction(gltf.animations[2]),
      walk: mixer.clipAction(gltf.animations[23]),
      up: mixer.clipAction(gltf.animations[11]),
      down: mixer.clipAction(gltf.animations[8]),
      init: mixer.clipAction(gltf.animations[5]),
      teleport: mixer.clipAction(gltf.animations[10]),
      attack: mixer.clipAction(gltf.animations[0]),
      Specialattack: mixer.clipAction(gltf.animations[6]),
      stopSwing: mixer.clipAction(gltf.animations[21]),
      jump: mixer.clipAction(gltf.animations[9]),
      attack360: mixer.clipAction(gltf.animations[12]),
      jumpKick: mixer.clipAction(gltf.animations[1]),
      CatchjumpKick: mixer.clipAction(gltf.animations[7]),
      landing: mixer.clipAction(gltf.animations[13]),
      Letsfight: mixer.clipAction(gltf.animations[22]),
      dead: mixer.clipAction(gltf.animations[3]),
      damedge: mixer.clipAction(gltf.animations[4]),
      swing: mixer.clipAction(gltf.animations[16]),
    };
    // Clips = gltf.animations;
    // const action = mixer.clipAction(Clips[23]);
    // action.play();
    // Spider.swing.play();   - >  model.rotateX(Math.PI * -0.5); model.position.z -= 12;model.position.y += 1.5;
  });
};

export { Model, Spider };
// 2 : sprint
// 11: jump up
// 23: walk
//8 : jump down
// 5: initial
// 10 : telepothy
//0 :  basic combate
// 6: toarnedo combact
// 21: swing down
// 9:  front jump
// 12 : flying shoot 360
// 1 :  jump kick
// 7: catch and jumping kicks
// 13: landing
// 22 :ready to fight
// 3: shot dead
// 4: damage
// 16:  swing horizontaly showing

//   mixer = new THREE.AnimationMixer(model);
//   clips = gltf.animations;

//   //   const action = mixer.clipAction(clips[9]);
//   //   action.play();

//   // const action = mixer.clipAction(clips[23]);
//   // action.play();

// animations
// 0:  AnimationClip {name: 'hero_spiderman209901_S02|hero_spiderman209901_S02|hero_spiderman209901_S02@atk-01|Base L', tracks: Array(104), duration: 1.3600000143051147, blendMode: 2500, uuid: '8767CC48-BD00-4A3A-9ECB-6DFD18C482CB'}
