const names = ["Jake", "Martin", "Eric", "Angie", "Malcolm"];

names.map((currentElement) => { // Optional elements include Index: spot of current elem, and an arr: hold the array
    // Calls a defined callback function on each item in an array
    console.log(currentElement + " :)");
});