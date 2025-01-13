/*
  an array of carousel objects, a carousel object contains its carousel 
  image and carousel controller elements
*/
let carouselGroups = [];

/*
  get all images that are supposed to be part of a carousel
*/
function getCarouselImages() {
  let carouselImgs = document.querySelectorAll(`[data-ebs-carousel-img]`);
  return carouselImgs;
}
