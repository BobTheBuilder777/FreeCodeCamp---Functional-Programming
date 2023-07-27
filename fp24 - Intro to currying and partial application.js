// This function adds three numbers together, using the currying technique. 
// The add function returns a function that expects the second number, which returns a function that expects the third number. When the third number is passed in, the three numbers are added together.
function add(x) {
    // Only change code below this line
    return function(y){
      return function (z){
        return x + y + z;
      }
    }
    // Only change code above this line
  }
  
  add(10)(20)(30);