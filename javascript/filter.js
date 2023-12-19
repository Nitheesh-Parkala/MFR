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

//tricky example.
const users =[
    {firstName: "Nitheesh", lastName: "Prabhu", age: "22"},
    {firstName: "Dhoni", lastName: "Prabhu", age: "42"},
    {firstName: "Puneeth", lastName: "RajKumar", age: "46"},
    {firstName: "Rocking", lastName: "star", age: "22"}
]; //array of objects

//["Nitheesh","Rocking"] //expected output. //to get this output only firstName 
// when age is less then 30 we should also use map function along with filter.
const output3 = users.filter((x)=> x.age<30)
.map((x)=> x.firstName)
console.log(output3)
// i have commented a filter.js file in index.html.