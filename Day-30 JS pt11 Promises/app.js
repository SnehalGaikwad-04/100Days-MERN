// Promise in JS

// Creating a promise
let MyPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      let randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber); // Resolve the promise with a value
      } else {
        reject("Number is less than or equal to 0.5"); // Reject the promise with an error
      }
    }, 1000); // Simulating a delay of 1 second
  });
  
  // Consuming the promise
  MyPromise.then((result) => {
    console.log("Promise resolved with value: " + result);
  }).catch((error) => {
    console.log("Promise rejected with error: " + error);
  });

  
// then() and catch() methods in JS
// Create a promise that resolves after 1 second
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber);
      } else {
        reject("Number is less than or equal to 0.5");
      }
    }, 1000);
  });
  
  // Consume the promise
  myPromise
    .then((result) => {
      console.log("Promise resolved with value: " + result);
    })
    .catch((error) => {
      console.log("Promise rejected with error: " + error);
    });
  