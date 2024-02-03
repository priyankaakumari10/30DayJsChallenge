// 🔍1. What is event delegation, and how does it function in JavaScript?

// print first sum of pair that give zero

const arr=[1,-5,8,9,-2,3,-6,1,-1,4,-4,7,-3]
function sum(arr){
    let sum=0;
    for(let num of arr){
        for(let j=1;j<arr.length;j++){
            if(num+arr[j]===0){
                return [num,arr[j]];
               
            }
        }
    }
}

const ans=sum(arr);
console.log(ans);
