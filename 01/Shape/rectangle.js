// exports.area = (width, height) => width * height;
// exports.circumference = (width, height) => 2 * (width + height);

// module.exports = {
//     area: (width, height) => width * height,
//     circumference: (width, height) => 2 * (width + height)
// }

module.exports = {
    // area is a function
    area: (width, height) => {
        return width * height;
    },
    // circumference is a function
    circumference: (width, height) => {
        console.log("Calculating...");
        return 2 * (width + height);
    },
    // currentDateTime is a property, not a function
    currentDateTime: Date(),
    directoryName: __dirname,
    fileName: __filename
}