const { error } = require("console");

function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function divide(a,b){
    if(b===0){
        throw new error("Divide by zero is not allowed");
    }
    return a/b;
}

module.exports = {add, sub, divide};