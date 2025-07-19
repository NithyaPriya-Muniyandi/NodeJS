function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Starting the async-await...");
async function asyncFunction(name) {    
    await delayFn(2000);
    console.log(name);
}
asyncFunction("Hello, async-await!");

async function AsyncDivideFun(num1, num2){
    try{
        if (num2 ===0) throw new Error("Cannot divide by zero");
        return num1 / num2;
    }
    catch(error){
        console.error("Error:", error);
        return null;
    }
}
async function mainfn(){
    console.log(await AsyncDivideFun(10, 2)); // Should print 5
    console.log(await AsyncDivideFun(10, 0)); // Should print error message
}
mainfn();