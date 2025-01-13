/*
  An array of carousel objects, a carousel object contains its carousel 
  image and carousel controller elements
*/
const carousels = {
  carouselIDs: [],
  carouselGroups: [],
};

/*
  Creates a 'carousel' object that stores the html elements that are involved 
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
  Get all carousel images defined in the html markup, with an option to get 
  only images with a certain value
*/
function getAllCarouselImages(attrValue = null) {
  let carouselImgs;
  if (attrValue) {
    carouselImgs = document.querySelectorAll(
      `[data-ebs-carousel-img="${attrValue}"]`
    );
  } else {
    carouselImgs = document.querySelectorAll(`[data-ebs-carousel-img]`);
  }
  return carouselImgs;
}

/*
  Get all carousel indicators defined in the html markup, with an option to get 
  only indicators with a certain value
*/
function getAllCarouselIndicators(attrValue = null) {
  let carouselIndicators;
  if (attrValue) {
    carouselIndicators = document.querySelectorAll(
      `[data-ebs-carousel-indicators="${attrValue}"]`
    );
  } else {
    carouselIndicators = document.querySelectorAll(
      `[data-ebs-carousel-indicators]`
    );
  }
  return carouselIndicators;
}

/*
  Get all carousel prev controlelrs defined in the html markup, with an option to get 
  only prev controllers with a certain value
*/
function getAllCarouselPrevControllers(attrValue = null) {
  let carouselPrevController;
  if (attrValue) {
    carouselPrevController = document.querySelectorAll(
      `[data-ebs-carousel-prev="${attrValue}"]`
    );
  } else {
    carouselPrevController = document.querySelectorAll(
      `[data-ebs-carousel-prev]`
    );
  }
  return carouselPrevController;
}

/*
  Get all carousel next controlelrs defined in the html markup, with an option to get 
  only next controllers with a certain value
*/
function getAllCarouselNextControllers(attrValue = null) {
  let carouselNextController;
  if (attrValue) {
    carouselNextController = document.querySelectorAll(
      `[data-ebs-carousel-next="${attrValue}"]`
    );
  } else {
    carouselNextController = document.querySelectorAll(
      `[data-ebs-carousel-next]`
    );
  }
  return carouselNextController;
}

/*
  Get all unique image 'ID's found (the values of the different custom 'data-ebs-carousel-img' 
  attributes). Unique means there are no duplicate IDs in the returned array. All carousel 
  elements that supposed to be grouped together share the same value (ID). 
*/
function getAllCarouselImageIDs() {
  const carouselIDs = [];
  let carouselImages = getAllCarouselImages();
  // add the first id since we need an id to compare to in the for loop to check for uniqueness
  if (carouselImages.length > 1) {
    carouselIDs.push(carouselImages[0].getAttribute("data-ebs-carousel-img"));
  } else {
    return carouselIDs;
  }
  for (let i = 1; i < carouselImages.length; i++) {
    let id = carouselImages[i].getAttribute("data-ebs-carousel-img");
    for (let j = 0; j < carouselIDs.length; j++) {
      if (id == carouselIDs[j]) {
        break;
      } else {
        carouselIDs.push(id);
      }
    }
  }
}
