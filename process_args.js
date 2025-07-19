// process.argv
 console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);

const nameArgs = process.argv[3] || "Guest";
console.log(`Hello, ${nameArgs}!`);