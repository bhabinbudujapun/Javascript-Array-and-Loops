// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using
// loop without using a reverse method.

let fruit = ['banana', 'orange', 'mango', 'lemon'];

console.log("Old Fruit array: ");
console.log(fruit);

let rFruit = [];
for(let f = fruit.length-1; f > -1; f--){
    rFruit.push(fruit[f]);
}
console.log("\nNew Fruit array: ");
console.log(rFruit);