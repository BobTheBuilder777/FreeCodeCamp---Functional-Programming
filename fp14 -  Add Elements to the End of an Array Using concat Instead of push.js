function nonMutatingPush(original, newItem) {
  // Only change code below this line
    let newArray = original.concat(newItem);
    console.log(newArray);
    return newArray;

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);