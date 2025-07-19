const path = require('path');

console.log("Directory Path:", path.dirname(__filename));
console.log("File Name:", path.basename(__filename));
console.log("Extension:", path.extname(__filename));
// join path
const joined = path.join("user", "Nithya");
console.log("Joined path:", joined);
// reslove path
const reslove = path.resolve("Join", "together");
console.log("Resolve:", reslove);
// normal path
const normal = path.normalize("/user/.NodeJS/../path-module");
console.log("Normal Path:", normal);


