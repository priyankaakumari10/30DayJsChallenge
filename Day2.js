//use of map filter and reducers

const arr = [
    { name: "a", age: 10 }, 
    { name: "b", age: 20 }, 
    { name: "c", age: 30 }
];
//map
arr.map((item) => {
    console.log(`${item.name} ${item.age}`)
    }
)

//filter name by age
arr.filter((item)=>item.age>10).map((item)=>console.log(item.name));

//reducer 
console.log("reducer")
const sum =arr.reduce((acc,curr)=>acc+curr.age,0);
console.log(sum);

/* interview question
1. Explain the basic usage of the map function in JavaScript.
The map function in JavaScript is an array method that is used to iterate over each element of an array and 
create a new array . 
map(callbackFn)
callbackFn
A function to execute for each element in the array. Its return value is added as a single element in 
the new array. 

foreach 
can mutate the original array
return undifine
does not have ability of chaining
https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/


https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
