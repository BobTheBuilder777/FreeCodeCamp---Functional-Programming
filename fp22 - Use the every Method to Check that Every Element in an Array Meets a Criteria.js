// This function checks if all the elements in the array are positive, using the every method.
function checkPositive(arr) {
    // Only change code below this line
  return arr.every(function(currentValue){ // the every method traverses the array and returns true if all elements in the array meet the condition, false otherwise
    return currentValue > 0;
  });
  
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));