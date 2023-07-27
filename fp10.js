Array.prototype.myFilter = function(callback) {
    const newArray = [];

    // Only change code below this line
    for (let i = 0; i < this.length; i++) { // looping through the array
        if (callback(this[i], i, this) == true){ // checking if the callback function returns true
            newArray.push(this[i]); // pushing the result of the callback function to the new array
        }; // pushing the result of the callback function to the new array
      }
    // Only change code above this line

    console.log(newArray);
    return newArray;
  };

  // [23, 65, 98, 5, 13].myFilter(item => item % 2);
  
  // this will check if the element is unique in the array. If it is, it will return true. If it is not, it will return false. 
  // if it returns true, it will push the element to the new array. If it returns false, it will not push the element to the new array.
  [1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index); 