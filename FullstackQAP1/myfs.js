// the fs module is a tool for dealing with the file system
// it allows for reading files, writing data to files, or managing directories
// it is needed for tasks like reading configuration files, logging data, etc

const fs = require('fs');
console.log('myfs is running');
// Write to a file
fs.writeFileSync('example.txt', 'example file content');

// Read from a file
const data = fs.readFileSync('example.txt', 'utf8');
console.log('file content:', data);