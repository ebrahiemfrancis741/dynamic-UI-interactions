/*
  dropdownPairs is  meant to be an array of objects. These objects contain 
  two properties, a reference to the 'dropdown button' DOM element and a 
  reference to the 'dropdown data' DOM element. Basically dropdownPairs 
  just groups the two 'matching' elements in one object for easy access.
*/
let dropdownPairs = [];

/*
  get all elements with 'ebs-ddd-btn' and 'ebs-dd-data' custom attributes.
*/
function getDropDownComponents() {
  let dropDownBtnList = document.querySelectorAll(`[ebs-dd-btn]`);
  let dropDownDataList = document.querySelectorAll(`[ebs-dd-data]`);
  return { dropDownBtnList, dropDownDataList };
}
