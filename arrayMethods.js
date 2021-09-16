let names = ["Jake", "Martin", "Eric", "Angie", "Malcolm"];

// Simple Methods
let joined = names.join(" "); // Joins each element in array with a space between each item
console.log(joined);

let popped = console.log(names.pop()); // Removes and returns last element from an array
popped;

let pushed = console.log(names.push("Malcolm")); // Adds a new element to end of array, returns new count of array
pushed;

let shifted = console.log(names.shift()); // Removes first element of array and shift existing down 1
shifted;

let unshifted = console.log(names.unshift("Jake")); // Adds new element to the start of an array, returns new array length
unshifted;

// More Complex Array Operations


names.map((currentElement) => { // Optional elements include Index: spot of current elem, and an arr: hold the array
    // Calls a defined callback function on each item in an array
    console.log(currentElement + " :)");
});

