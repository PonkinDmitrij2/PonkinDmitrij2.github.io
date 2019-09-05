'use strict';

const sounds = document.querySelector('.sounds');
const volumeControls = [...document.querySelectorAll('.sound__volume-control')];

const handlePlayBtn = (event) => {
  if (!event.target.classList.contains('sound__play-control')) {
    return;
  }

  const audioElem = event.target.parentNode.querySelector('.sound__audio');

  if (audioElem.paused) {
    audioElem.play();
    event.target.classList.toggle('sound__play-control--pause');
  } else {
    audioElem.pause();
    event.target.classList.toggle('sound__play-control--pause');
  }
};

const handleChangeVolume = (event) => {
  const volume = Number(event.target.value) / 100;
  const audioElem = event.target.parentNode.querySelector('.sound__audio');

  audioElem.volume = volume;
};

document.querySelectorAll('.sound__audio').forEach((audioElem) => audioElem.volume = 0.5);

sounds.addEventListener('click', handlePlayBtn);

volumeControls.forEach((item) => item.addEventListener('change', handleChangeVolume));
