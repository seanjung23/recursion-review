// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, accumulator
) {
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

  var htmlElements = accumulator === undefined ? document.body : accumulator;
  var result = [];

  if (htmlElements.classList && htmlElements.classList.contains(className)) {
    result.push(htmlElements);
  }

  if (!htmlElements.childNodes) {
    if (htmlElements.classList.contains(className)) {
      result.push(htmlElements);
      return result;
    } else {
      return result;
    }
  }

  if (htmlElements.childNodes) {
    htmlElements.childNodes.forEach(function (node) {
      result = result.concat(getElementsByClassName(className, node));
    });
  }

  return result;

};
