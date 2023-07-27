function alphabeticalOrder(arr) {
    // Only change code below this line
    /*
    the sort method compares two elements of an array (a, b) and sorts them according to the return value of the compare function. 
    If the compare function returns a negative number, a is placed before b. 
    If the compare function returns a positive number, b is placed before a. 
    If the compare function returns 0, the order of the two elements are unchanged.
    */
    return arr.sort(function(a, b)  { // this is the compare function
        return a === b ? 0 : a < b ? -1 : 1; // if a is equal to b, return 0. If a is less than b, return -1. If a is greater than b, return 1.
    })
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));