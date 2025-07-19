// module.exports -> export
// require -> import
const firstModule = require('./first-module')
console.log(firstModule.add(5,7));
// console.log(firstModule.divide(10,20));

try{
    console.log("trying to divide by 0");
    let result = firstModule.divide(0,10);
    console.log(result);
} catch (error){
    console.log("catch the error", error.message);
}

(
    // module wrapper
    function(exports  , require, module, __filename, __dirname){

    }
)