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
  let dropDownBtnList = document.querySelectorAll(`[ebs-dd-btn]`);
  let dropDownDataList = document.querySelectorAll(`[ebs-dd-data]`);
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
        dropdownComponents.dropDownBtnList[i].getAttribute(`ebs-dd-btn`);
      dropdownDataAttrValue =
        dropdownComponents.dropDownDataList[j].getAttribute(`ebs-dd-data`);
      if (dropdownBtnAttrValue == dropdownDataAttrValue) {
        dropdownPairs.push({
          dropDownBtn: dropdownComponents.dropDownBtnList[i],
          dropDownData: dropdownComponents.dropDownDataList[j],
        });
      }
    }
  }
}

export { generateDropDownPairs };
