// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a
// CSS preprocess'. If it does not exist add Sass to the array and print the array.

let webTechs = ['Html','Css','Javascript','Sass'];

if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}
else{
    webTechs.push('Sass');
    console.log(webTechs);
}