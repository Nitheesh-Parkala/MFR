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