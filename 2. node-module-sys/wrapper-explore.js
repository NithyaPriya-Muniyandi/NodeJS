console.log("Node Wrapper module");

console.log("FileName in explore:", __filename);
console.log("DirName in explore:", __dirname);

module.exports.greet = function (name){
    console.log(`Hi, ${name}`)
}