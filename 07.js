// Write a script which generates a random hexadecimal number.

const characters = '123456789ABCDEF';

let generateHex = () => {
    let max = 15;
    let min = 0;
    return characters.charAt(Math.floor(Math.random()*(max - min + 1)) + min);
}

let hexadecimal = generateHex();
console.log("Random hexadecimal number:",hexadecimal);