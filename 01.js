// In the following shopping cart add, remove, edit itemsconst shoppingCart = ['Milk',
// 'Coffee', 'Tea', 'Honey']

// a. add 'Meat' in the beginning of your shopping cart if it has not been already added
// b. add 'Sugar' at the end of you shopping cart if it has not been already added
// c. remove 'Honey' if you are allergic to honey
// d. modify Tea to 'Green Tea'

let shoppingCart = ['Milk','Coffee','Tea','Honey'];
console.log("Old Array: ",shoppingCart);

// Solution for question-> a)
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
}
console.log('New Array: ',shoppingCart)

// Solution for question-> b)
if(!shoppingCart.includes('Sugra')){
    shoppingCart.push('Sugar');
}
console.log('New Array: ',shoppingCart)

// Solution for question-> c)
let allergic = true;
if(allergic && shoppingCart.includes('Honey')){
    let honeyIndex = shoppingCart.indexOf('Honey');
    shoppingCart.splice(honeyIndex,1);
}
console.log('New Array: ',shoppingCart);

// Solution for question-> d)
let copyShoppingCart = shoppingCart;
shoppingCart = [];
for( let items of copyShoppingCart){
    if(items == 'Tea'){
        shoppingCart.push('Green Tea');
        continue;
    }
    shoppingCart.push(items)
}
console.log('New Array: ',shoppingCart);
