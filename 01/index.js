const rect = require('./Shape/rectangle');

console.log("Hello world");
console.log("How are you?")
console.log(`The area of the rectangle (width = 10, height = 20) is ${rect.area(10,20)}`);
console.log(`The circumference of the rectangle  (width = 10, height = 20) is ${rect.circumference(10,20)}`);
console.log(`Current time is: ${rect.currentDateTime}`);
console.log(`Directory name: ${rect.directoryName}`);
// console.log(`Directory name: ${rect.__dirname}`); // cannot call like this!
console.log(`File name: ${rect.fileName}`)