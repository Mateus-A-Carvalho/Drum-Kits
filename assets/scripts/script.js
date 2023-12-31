const drumBassEl = document.querySelector('#bass-drum');
const hihatCymbalEl = document.querySelector('#hihat-cymbal');
const snareDrumEl = document.querySelector('#snare-drum');
const rideCymbalEl = document.querySelector('#ride-cymbal');
const tomDrumEl = document.querySelector('#tom-drum');
const crashCymbalEl = document.querySelector('#crash-cymbal');
const floorTomEl = document.querySelector('#floor-tom');

// Const with sound effects
const drumBassSoundEffectEl = document.querySelector('#drum-bass-sound-effect');
const hihatCymbalSoundEffectEl = document.querySelector('#hihat-cymbal-sound-effect');
const snareDrumSoundEffectEl = document.querySelector('#snare-drum-sound-effect');
const rideCymbalSoundEffectEl = document.querySelector('#ride-cymbal-sound-effect');
const tomDrumSoundEffectEl = document.querySelector('#tom-sound-effect');
const crashCymbalSoundEffectEl = document.querySelector('#crash-cymbal-sound-effect');
const floorTomSoundEffectEl = document.querySelector('#floor-tom-sound-effect');
  
const nodeListHeadingsEl = document.querySelectorAll('.img-heading');
const nodeListImgEl = document.querySelectorAll('.drum-tool');

nodeListImgEl.forEach((imgElement) => {
  const imgId = imgElement.id;
  const headingDataId = document.querySelector(`.img-heading[data-img-id=${imgId}]`);

  imgElement.addEventListener("mouseover", () => {
    headingDataId.style.visibility = `visible`;
    headingDataId.classList.add('slide-in-right');
    headingDataId.classList.remove('slide-out-right');
  })

  imgElement.addEventListener("mouseleave", () => {
    headingDataId.classList.remove('slide-in-right');
    headingDataId.classList.add('slide-out-right');
  })


})

document.addEventListener("click", (e) => {
  const elementTarget = e.target;
  
  if(elementTarget === drumBassEl) return playSoundEffect(drumBassSoundEffectEl);
  if(elementTarget === hihatCymbalEl) return playSoundEffect(hihatCymbalSoundEffectEl);
  if(elementTarget === snareDrumEl) return playSoundEffect(snareDrumSoundEffectEl);
  if(elementTarget === rideCymbalEl) return playSoundEffect(rideCymbalSoundEffectEl);
  if(elementTarget === tomDrumEl) return playSoundEffect(tomDrumSoundEffectEl);
  if(elementTarget === crashCymbalEl) return playSoundEffect(crashCymbalSoundEffectEl);
  if(elementTarget === floorTomEl) return playSoundEffect(floorTomSoundEffectEl);
})

document.addEventListener("keydown", (e) => {
  if(e.code === "KeyD") return playSoundEffect(drumBassSoundEffectEl);
  if(e.code === "KeyH") return playSoundEffect(hihatCymbalSoundEffectEl);
  if(e.code === "KeyS") return playSoundEffect(snareDrumSoundEffectEl);
  if(e.code === "KeyR") return playSoundEffect(rideCymbalSoundEffectEl);
  if(e.code === "KeyT") return playSoundEffect(tomDrumSoundEffectEl);
  if(e.code === "KeyC") return playSoundEffect(crashCymbalSoundEffectEl);
  if(e.code === "KeyF") return playSoundEffect(floorTomSoundEffectEl);
})

const playSoundEffect = audioElement => audioElement.play()

// element.addEventListener("mousemove", (e) => {
  //   nodeListHeadingsEl.forEach((headingElement) => {
  //     headingElement.classList.add('slide-in-right');
  //     headingElement.classList.remove('slide-out-right');
  //   })
  // })

  // element.addEventListener("mouseout", (e) => {
  //   nodeListHeadingsEl.forEach((headingElement) => {
  //     headingElement.classList.add('slide-out-right');
  //     headingElement.classList.remove('slide-in-right');
  //   })
  // })