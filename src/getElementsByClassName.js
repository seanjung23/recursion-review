// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // your code here

  // I - class name, elements of the HTML body
  // O - Array without nesting (flattened)
  // C - Have to use document.body, element.childNodes, and element.classList
  // E - None for now

  // Set variables for the HTML elements
  // Make a result variable for our flattened array
  // Set base case to stop when there are no child nodes
  //   Return any html elements that have the classname or return nothing
  // Set recursive function to iterate over each branch of HTML elements
  //   Concat any html elements that have the classname to the result variable
  // Return flattened array

  var element = element === undefined ? document.body : element;
  var children = element.childNodes;
  var result = [];

  if (element.classList && element.classList.contains(className)) {
    result.push(element);
  }
  if (children) {
    children.forEach(function(item) {
      result = result.concat(getElementsByClassName(className, item));
    });
  }

  return result;
};
