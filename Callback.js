//# what is callback in javascript ?
/*callback is a function that is passed as an argument to another function and is executed after some operation is completed.
Callback functions in JavaScript are powerful, allowing functions to be passed as parameters to other functions. 
Event listeners are a common use case, where a callback function is executed when an event occurs.

it allows as to perfrom some async task in syncronus manner in a signle threded language.Async tasks are those tasks which initiate now and execute later.
*/

// example of callback function
// Scenario 1: Without a Callback
// function fetchUserData() {
//     setTimeout(() => {
//       const user = { name: "Priyanka", age: 25 };
//       console.log("User data fetched:", user);
//     }, 2000);  // Simulate a 2-second delay
//   }
  
//   fetchUserData();
//   console.log("Processing other tasks...");
//   console.log("Displaying user name:", user.name);  // Error! 'user' is not defined yet
  
// Scenario 2: With a Callback


function fetchUserData(callback) {
  setTimeout(() => {
    const user = { name: "Priyanka", age: 25 };
    console.log("User data fetched");
    callback(user);  // Pass the fetched data to the callback
  }, 2000);  // Simulate a 2-second delay
}

function displayUser(user) {
  console.log(`Displaying user name: ${user.name}`);  // Safely use fetched data
}

fetchUserData(displayUser);
console.log("Processing other tasks...");

// example 2
function firstFunction(callback) {
    console.log("I am first function");
    callback();
}

function secondFunction() {
    console.log("I am second function");
}
// firstFunction(secondFunction);

// why we should use callback function ?
// callback function is used to handle asynchronous operations in javascript.
// example of callback function in asynchronous operation

function getData(callback) {
    setTimeout(function () {
        console.log("I am getting data");
        callback();
    }, 2000);
}

function displayData() {
    console.log("I am displaying data");
}

// getData(displayData);

//what happen is i dont use call back?
// if i dont use callback function then the second function will not be executed until the first function is completed.
// what is single thread ?
// single thread is a single thread of execution in a program. It means that the program can only execute one operation at a time. 
// how callback function work in single thread ?
// callback function work in single thread because the program can only execute one operation at a time. 
// when the first operation is completed then the callback function is executed.




















//why we use callback in map function?
//what is main thread and main thread blocking ? main thread means call stack and main thread blocking means when the main thread is blocked then the program will not be able to execute any other operation.
//what is event loop?
//what is event queue?
//what is call stack?
//what is callback function?
//what is asynchronous operation?
//what is callback hell?
//what is promise?
//what is async await?
//what is callback function in async await?
//what is callback function in promise?
//what is callback function in map function?
