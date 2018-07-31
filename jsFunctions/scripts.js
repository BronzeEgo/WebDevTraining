// //function declaration
// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
//
//
// //function expression
// var capitalize = function(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

//isEven takes a single Number argument and returns True of it is even and False otherwise
function isEven(num) {
  if (num % 2 === 0) {
    return 'true';
  }
  else {
    return "false";
  }
}

//factorial() takes a single Number and returns the factorial of it
function factorial(num) {
  var result = num;

  if (num === 0 || num === 1)
  return 1;

  while (num>1) {
    num--;
    result = result * num;
  }
  return result;
}

//kebabToSnake takes a single kabab-cased argument and returns a snake_cased version.
function kababToSnake(str) {
var newStr = str.replace(/-/g , "_");
return newStr;
}
