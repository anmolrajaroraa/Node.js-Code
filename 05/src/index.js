const fileManager = require('./fileManager');

console.log(`Working with Files`);
const fileName = __dirname + '/../data/temp.txt';
fileManager.createNewFile(fileName);