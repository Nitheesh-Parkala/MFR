const arr = [5,1,3,2,6];

//sum or max

function findSum(arr){
    let sum = 0; //here sum should be defined other wise it will not give you result.
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));


//using reduce method.
const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0) // here i'm passing initial value to the accumulator

console.log(output)


// finding maximum value.
function findMax(arr){
    let max = 0; //here max should be defined other wise it will not give you result.
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max= arr[i]
        }
    }
    return max;
}
console.log(findMax(arr));


const output1 = arr.reduce(function(max,curr){
    if(curr>max){
     max= curr;  
    }
    return max
},0)
console.log(output1)
// we can use this approach as well.

// const output1 = arr.reduce((max, curr) => (curr > max ? curr : max), 0);
// console.log(output1);


//tricky example using reduce .
const users =[
    {firstName: "Nitheesh", lastName: "Prabhu", age: "22"},
    {firstName: "Dhoni", lastName: "Prabhu", age: "42"},
    {firstName: "Puneeth", lastName: "RajKumar", age: "46"},
    {firstName: "Rocking", lastName: "star", age: "22"}
]; //array of objects

//{22:2, 42:1, 46:1} -here i should check how many people with same age and without same age.

const output3 = users.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
  }else{
    acc[curr.age]=1;
  }
  return acc;
},{})
console.log(output3)

//tricky example. using reduce
const output4 = users.reduce((accumulator, user) => {
    if (user.age < 30) {
        accumulator.push(user.firstName);
    }
    return accumulator;
}, []);//it's initial value and we want the result in the form of an array (names), not the object.

console.log(output4); 
