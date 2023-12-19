const arr =[5,1,3,2,6];

//filter odd values.
function isOdd(x){
    return x%2;
}
const output = arr.filter(isOdd)

console.log(output);

//filter Even values.
function isEven(x){
    return x%2 === 0 ;
}
const output1 = arr.filter(isEven)

console.log(output1);

//filter Greater values.
// function greater(x){
//     return x>4
// }
// const output2 = arr.filter(greater);
const output2 = arr.filter((x)=>x>4);
console.log(output2)

// i have commented a filter.js file in index.html.