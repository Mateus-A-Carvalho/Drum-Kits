const drumBassEl = document.querySelector('#drum-bass');
const hihatCymbalEl = document.querySelector('#hihat-cymbal');
const snareDrumEl = document.querySelector('#snare-drum');
const rideCymbalEl = document.querySelector('#ride-cymbal');
const tomDrumEl = document.querySelector('#tom-drum');
const attackCymbalEl = document.querySelector('#drum-bass');
const floorTomEl = document.querySelector('#floor-tom');

// Const with sound effects
const drumBassSoundEffectEl = document.querySelector('#drum-bass-sound-effect');
const hihatCymbalSoundEffectEl = document.querySelector('#hihat-cymbal-sound-effect');
const snareDrumSoundEffectEl = document.querySelector('#snare-drum-sound-effect');
const rideCymbalSoundEffectEl = document.querySelector('#ride-cymbal-sound-effect');
const tomDrumSoundEffectEl = document.querySelector('#tom-sound-effect');
const attackCymbalSoundEffectEl = document.querySelector('#attack-cymbal-sound-effect');
const floorTomSoundEffectEl = document.querySelector('#floor-tom-sound-effect');


document.addEventListener("click", (e) => {
  const elementTarget = e.target;
  
  if(elementTarget === drumBassEl) return playSoundEffect(drumBassSoundEffectEl);
})

function playSoundEffect (audioElement) {
  return audioElement.play(); 
}