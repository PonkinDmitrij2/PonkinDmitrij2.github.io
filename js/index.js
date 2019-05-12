'use strict';

const PHOTO_BOX = `photo-box`;
const PHOTO_BOX_IMG = `${PHOTO_BOX}__image`;
const PHOTO_BOX_OVERLAY = `${PHOTO_BOX}--overlay`;
const PHOTO_BOX_IMG_FULL = `${PHOTO_BOX}__image--full`;
const PHOTO_BOX_CLOSE_SHOWN = `${PHOTO_BOX}__close--show`;
const images = document.querySelectorAll(`.${PHOTO_BOX_IMG}`);

images.forEach((photo) => {
  photo.addEventListener('click', handlerPhotoFull);
});

function handlerPhotoFull() {
  const parentBox = this.parentElement;
  const btnClose = this.nextElementSibling;

  parentBox.classList.add(PHOTO_BOX_OVERLAY);
  this.classList.add(PHOTO_BOX_IMG_FULL);
  btnClose.classList.add(PHOTO_BOX_CLOSE_SHOWN);

  const closeFullImg = () => {
    parentBox.classList.remove(PHOTO_BOX_OVERLAY);
    this.classList.remove(PHOTO_BOX_IMG_FULL);
    btnClose.classList.remove(PHOTO_BOX_CLOSE_SHOWN);
  };

  btnClose.addEventListener('click', closeFullImg);
}
