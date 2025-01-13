/*
  an array of carousel objects, a carousel object contains its carousel 
  image and carousel controller elements
*/
let carouselGroups = [];

/*
  creates a 'carousel' object that stores the html elements that are involved 
  in a single carousel
*/
function createCarousel(
  carouselImgs = [],
  carouselControllerNext = null,
  carouselControllerPrev = null,
  carouselIndicators = []
) {
  return {
    carouselImgs,
    carouselControllerNext,
    carouselControllerPrev,
    carouselIndicators,
  };
}

/*
  get all images that are supposed to be part of a carousel
*/
function getCarouselImages() {
  let carouselImgs = document.querySelectorAll(`[data-ebs-carousel-img]`);
  return carouselImgs;
}
