// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";




// Change code below this line

const galleryMarkup = createGalleryImages(galleryItems);  

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);



function createGalleryImages(images) {
    const markupImages = images.map(({preview,original,description }) => {
        return `
       <div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
    return markupImages;
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
  captionDelay: 250,
});
lightbox.open("show.simplelightbox");

