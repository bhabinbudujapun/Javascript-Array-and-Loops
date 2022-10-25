// Develop a small script which generate any number of characters random id

// This function, Will return a integer between 0 and 9
let generateNum = () => {
    return(Math.floor(Math.random()*10));
}

let number = generateNum();
console.log("Generated Number:",number);