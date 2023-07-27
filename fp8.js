/* Implement map on a Prototype
Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). 
You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.*/
Array.prototype.myMap = function(callback) { // defining myMap function which takes the callback function as an argument
  const newArray = [];  // creating a new array
  for (let i = 0; i < this.length; i++) { // looping through the array
    newArray.push(callback(this[i], i, this)); // pushing the result of the callback function to the new array
  }
  return newArray; // returning the new array
};
  