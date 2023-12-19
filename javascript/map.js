const arr =[5,1,3,2,6];

//Double -[10,2,6,4,12];
function double(x){
    return x*2;
}
const output = arr.map(double);
console.log(output);

//Triple-[15,3,9,6,18];
function triple(x){
    return x*3;
}
const output1 = arr.map(triple);
console.log(output1);

//Binary-["101","1","11","10","110"];
  // function binary(x){
  //     return x.toString(2);
  // } 

  // const output2 = arr.map(function binary(x){
  //     return x.toString(2);
  // });
const output2 = arr.map((x)=> x.toString(2))
console.log(output2);

// i have commented a map.js file in index.html.

const users =[
    {firstName: "Nitheesh", lastName: "Prabhu", age: "22"},
    {firstName: "Dhoni", lastName: "Prabhu", age: "42"},
    {firstName: "Puneeth", lastName: "RajKumar", age: "46"},
    {firstName: "Rocking", lastName: "star", age: "39"}
]; //array of objects

//list of full names
const output3 = users.map((x)=> x.firstName +" "+ x.lastName);
console.log(output3)

