const promise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Starting the promise...");
delayFn(2000).then(() => 
  console.log("Promise resolved after 2 seconds."));
    console.log("Ending the promise...");


