function sliceArray(anim, beginSlice, endSlice) {

    // Only change code below this line
    return anim.slice(beginSlice,endSlice); // slice method returns a shallow copy of a portion of an array into a new array object selected from beginSlice to endSlice (endSlice not included)
  
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);