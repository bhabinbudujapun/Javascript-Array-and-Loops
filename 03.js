// The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs()
// method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
ages.sort();
console.log("Min. age is ",ages[0]);
console.log("Max. age is ",ages[ages.length-1]);

// Find the median age(one middle item or two middle items divided by two)
let val1 = Math.floor((ages.length+1)/2);
console.log('Median age is ',ages[val1]);

// Find the average age(all items divided by number of items)
let total = (ages) =>{
    let sum = 0;
    for (let age of ages)
        sum += age;
    return sum;
}
let average= total(ages) / ages.length;
console.log("Average age is ",average); 

// Find the range of the ages(max minus min)
let min = ages[0];
let max = ages[ages.length-1];

console.log("Range of ages ",max-min);

// Compare the value of (min - average) and (max - average), use abs() method
let valueA = Math.abs(min-average);
let valueB = Math.abs(max-average);

if(valueA > valueB)
    console.log("min-average is greater");
else if(valueA < valueB)
    console.log("max-average is greater");
else
    console.log("min-average and max-average is equal");