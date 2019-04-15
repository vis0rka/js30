'use strict';
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.sound');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
})

function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.sound[data-key="${event.keyCode}"]`);
  if (!audio || !key) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener('keydown', playsound);