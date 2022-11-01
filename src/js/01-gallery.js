// Add imports above this line
import {galleryItems} from "./gallery-items.js";
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

// Change code below this line

const galleryMarkup = createGalleryImages(galleryItems);  

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onClickImage);



function onClickImage(event) {
    event.preventDefault();

  const instance = basicLightbox.create(
    `<div class="modal">
      <img src="${event.target.dataset.source}" width="800" height="600">
     </div>`,
    {
      onShow() {
        document.addEventListener('keydown', closeModalImg)
      },
      onClose() {
        document.removeEventListener('keydown', closeModalImg)
      },
    },
  )
  instance.show();

  function closeModalImg(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
}

