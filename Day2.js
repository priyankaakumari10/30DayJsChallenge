//use of map filter and reducers

const arr = [
    { name: "a", age: 10 }, 
    { name: "b", age: 20 }, 
    { name: "c", age: 30 }
];

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