const fs = require('fs');
const path = require('path');

// Create folder
const dataFolder = path.join(__dirname, 'data');
console.log("Folder path:", dataFolder);

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data Folder Created");
}

// Create file
const createFile = path.join(dataFolder, 'example.txt');
fs.writeFileSync(createFile, 'Hello node js');
console.log("File created");

// Read content from file
const fileRead = fs.readFileSync(createFile, 'utf8');
console.log("Read file:", fileRead);

// Append to file
fs.appendFileSync(createFile, '\nThis is a new line to append');
console.log("Line appended");

// Async operations
const asyncFilePath = path.join(dataFolder, 'async.txt');

fs.writeFile(asyncFilePath, 'Hi async File', (err) => {
  if (err) throw err;
  console.log("Async file created");

  fs.readFile(asyncFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Read async file:", data);

    // Your original code missed a comma between the string and callback
    fs.appendFile(asyncFilePath, '\nThis is new async line', (err) => {
      if (err) throw err;
      console.log("Async line appended");

    // updated data
    fs.readFile(asyncFilePath, 'utf8', (err, updateData) =>{
        if (err) throw err;
        console.log("Updated Data:", updateData)
    });
    });
  });
});
