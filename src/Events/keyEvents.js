import { Spider } from "../3dmodels";
import { canvas } from "../script";

export const Inputs = () => {
  window.addEventListener("keydown", (e) => KeyDown(e), false);

  window.addEventListener("keyup", (e) => KeyUp(e), false);
  window.addEventListener("mousedown",(e)=> BtnDown(e),false);
  window.addEventListener("mouseup",(e)=> BtnUp(e),false);
  canvas.addEventListener("scroll",(e)=>console.log(e),false);
  }

  let move = 0 ;

  
  function changeEmote () {
    switch(move){
      case 0 :
        Spider.jumpKick.play(); 
        move = 1;
        return setTimeout(() => {
          Spider.jumpKick.stop();
          alert(move,"stop");
        }, Spider.jumpKick._clip.duration * 1000);


      case 1 :
        move = 2;
        Spider.CatchjumpKick.play();
        return setTimeout(() => {
          Spider.CatchjumpKick.stop();
          alert(move,"stop");
        }, Spider.CatchjumpKick._clip.duration * 1000);


      case 2 :
        move = 3;
        Spider.attack360.play(); 
        return setTimeout(() => {
          Spider.attack360.stop();
          alert(move,"stop");
        }, Spider.attack360._clip.duration * 1000);


      case 3 :
        move = 0;
        Spider.Specialattack.play(); 
        return setTimeout(() => {
          Spider.Specialattack.stop();
          alert(move,"stop");
        }, Spider.Specialattack._clip.duration * 1000);
    }
  }

  
  let swing = false;
  
  
  // attack360 
  // Specialattack
  // damedge


 
  // jumpKick
  
  // init
  
  // Letsfight
  // down
  // dead
  // stopSwing
  // landing
  // swing
  // CatchjumpKick
  // up

  // duration of action = Spider.action._clip.duration * 1000


  /**
  |--------------------------------------------------|
  |                                                  |
  |--------------------------------------------------|
  */
// walk - w
// sprint - shift + w
// jump - space
// attack - mouse button 0
// teleport - t


  function KeyDown(e) {

 

    switch (e.keyCode) {
      case 87: // w
      if(e.shiftKey === true){
        Spider.sprint.play();
      }else{
         Spider.walk.play();
      }
        break;

      case 38: // up Arrow
        Spider.walk.play();
        break;

      case 13: // enter
        Spider.attack360.play();
        setTimeout(() => {
          Spider.attack360.stop();
        }, Spider.attack360._clip.duration * 1000);
        break;

      case 65: // a
        break;

      case 83: // s
        break;

      case 68: // d
        Spider.damedge.play();
        setTimeout(() => {
          Spider.damedge.stop();
        }, Spider.damedge._clip.duration * 1000);
        break;

      case 67: // c
        Spider.CatchjumpKick.play();
        setTimeout(() => {
          Spider.CatchjumpKick.stop();
        }, Spider.CatchjumpKick._clip.duration * 1000);
        break;

      case 32: // SPACE
        Spider.jump.play();
        setTimeout(() => {
          Spider.jump.stop();
        }, Spider.jump._clip.duration * 1000);
        break;

      case 81: // q
        Spider.Specialattack.play();
        setTimeout(() => {
          Spider.Specialattack.stop();
        }, Spider.Specialattack._clip.duration * 1000);
        break;

      case 84: // t
        Spider.teleport.play();
        setTimeout(() => {
          Spider.teleport.stop();
        }, Spider.teleport._clip.duration * 1000);
        break;

      case 16: // SHIFT
        // Spider.jumpKick.play();
        setTimeout(() => {
          Spider.jumpKick.stop();
        }, Spider.jumpKick._clip.duration * 1000);
        break;
    }
  }

  function KeyUp(e) {
    switch (e.keyCode) {
      case 87: // w
        Spider.walk.stop();
        Spider.sprint.stop();
        break;
      case 38: // arrow Up
        Spider.walk.stop();
        break;
      case 65: // a
        Spider.sprint.stop();
        break;
    }
  }

  function BtnUp(e) {
    switch (e.button) {
      case 0: // left mouse button
      Spider.attack.stop();
        break;
        
        case 2: // right mouse button
        Spider.Letsfight.stop();
        break;
    }
  }
  function BtnDown(e) {
    console.log(e);
    switch (e.button) {
      case 0: // left mouse button
      Spider.attack.play();
      break;
      
      case 1:
        if(e.shiftKey === true){
          changeEmote();
        }else{
          //  Spider.init.play();
          console.log(move);
        }
        break;

      case 2: // right mouse button
      Spider.Letsfight.play();
        break;
    }
  }
