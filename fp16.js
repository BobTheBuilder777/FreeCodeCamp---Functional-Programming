/* Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
Complete the code for the squareList function using any combination of map(), filter(), and reduce(). 
The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. 
An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].
*/

const squareList = arr => {
    // Only change code below this line
    // filter out negative numbers. filter out non-integers. parseInt() parses a value as a string and returns the first integer it encounters. So parseInt(4.8) returns 4.
    // This means that 4.8 % parseInt(4.8) will not equal 0, so 4.8 will be filtered out.
    var arrFiltered = arr.filter(num => num > 0 && num % parseInt(num) === 0);
    // square the remaining numbers
    var arrSquared = arrFiltered.map(num => num * num);
    // return the squared numbers
    return arrSquared;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);