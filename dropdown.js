/*
  dropdownPairs is  meant to be an array of objects. These objects contain 
  two properties, a reference to the 'dropdown button' DOM element and a 
  reference to the 'dropdown data' DOM element. Basically dropdownPairs 
  just groups the two 'matching' elements in one object for easy access.
*/
const dropdownPairs = [];

/*
  get all elements with 'ebs-ddd-btn' and 'ebs-dd-data' custom attributes.
*/
function getDropDownComponents() {
  let dropDownBtnList = document.querySelectorAll(`[data-ebs-dd-btn]`);
  let dropDownDataList = document.querySelectorAll(`[data-ebs-dd-data]`);
  return { dropDownBtnList, dropDownDataList };
}

/*
  Attemps to match every 'dropdown button' with its 'dropdown data' which 
  is then stored in a single object inside an array
*/
function generateDropDownPairs() {
  let dropdownComponents = getDropDownComponents();
  let dropdownBtnAttrValue;
  let dropdownDataAttrValue;
  for (let i = 0; i < dropdownComponents.dropDownBtnList.length; i++) {
    for (let j = 0; j < dropdownComponents.dropDownDataList.length; j++) {
      dropdownBtnAttrValue =
        dropdownComponents.dropDownBtnList[i].getAttribute(`data-ebs-dd-btn`);
      dropdownDataAttrValue =
        dropdownComponents.dropDownDataList[j].getAttribute(`data-ebs-dd-data`);
      if (dropdownBtnAttrValue == dropdownDataAttrValue) {
        dropdownPairs.push({
          dropdownBtn: dropdownComponents.dropDownBtnList[i],
          dropdownData: dropdownComponents.dropDownDataList[j],
        });
      }
    }
  }
}

/*
  Applys dropdown functionality to all discovered 'dropdown pairs'
*/
function activateAllDropdowns() {
  for (let i = 0; i < dropdownPairs.length; i++) {
    activateDropdown(dropdownPairs[i]);
  }
}

/*
  Apply dropdown functionality to the specified 'dropdown pair'.
  dropdownPair = {(dropdown Button), (dropdown Data)}
*/
function activateDropdown(dropdownPair) {
  dropdownPair.dropdownData.style.visibility = "hidden";
  dropdownPair.dropdownBtn.addEventListener("click", function (e) {
    if (dropdownPair.dropdownData.style.visibility == "hidden") {
      dropdownPair.dropdownData.style.visibility = "visible";
    } else {
      dropdownPair.dropdownData.style.visibility = "hidden";
    }
  });
}

export { generateDropDownPairs, activateAllDropdowns };
