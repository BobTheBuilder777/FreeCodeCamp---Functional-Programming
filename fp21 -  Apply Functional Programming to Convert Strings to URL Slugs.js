// Only change code below this line
function urlSlug(title) {
// first, convert the string to lowercase
// then, remove any whitespace from the beginning and end of the string
// split the sentence into an array of strings using one or more spaces as the separator
// use map to iterate over the array and add - at the end of each word
// use join to join the array back into a string
// use slice to remove the last - from the string. the slice method is inclusive of the first index and exclusive of the last index
return title.toLowerCase().trim().split(/\s+/).map (word => word + "-").join("").slice(0, -1);

}
// Only change code above this line
// console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));