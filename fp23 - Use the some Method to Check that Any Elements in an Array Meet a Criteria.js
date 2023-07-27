// This function checks if any of the elements in the array are positive, using the some method.
function checkPositive(arr) {
    // Only change code below this line
  return arr.some(function(currentValue){ // the some method traverses the array and returns true if any element in the array meets the condition, false otherwise
    return currentValue > 0;
  })
  
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));