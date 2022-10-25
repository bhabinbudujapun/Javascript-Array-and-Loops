// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node",
// "Express", "MongoDB"] using a for loop or for of loop and print out the items.

//Using for loop
console.log("Using for Loop:")
let fullStackDev = ["HTML", "CSS", "JS", "React", "Redux", "Node","Express", "MongoDB"];
for(let i = 0; i<fullStackDev.length; i++){
    console.log(fullStackDev[i]);
}

//Using for of loop
console.log("\nUsing for of loop:")
for(let topic of fullStackDev){
    console.log(topic);
}
