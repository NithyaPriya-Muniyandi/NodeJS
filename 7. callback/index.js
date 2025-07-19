const fs = require('fs');

function person(name, callbackfn){
    console.log(`Helooo! ${name}`);
    callbackfn();
}

function address(){
    console.log("I am from India");
}
person("Nithya", address);

fs.readFile('index.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});