const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
let copy = arr.concat([]); // this is how to create a copy of an array in JS
return copy.sort(function(a, b){ // sort in ascending order
  return a - b;
});

  // Only change code above this line
}

nonMutatingSort(globalArray);
console.log(nonMutatingSort(globalArray));