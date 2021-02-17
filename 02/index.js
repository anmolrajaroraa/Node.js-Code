console.log("Hello");
debugger;
let arithmeticMean = (numbers) => {
    let total = 0;
    debugger;
    for(let number of numbers){
        total = total + number;
        console.log(`Total is: ${total}, Number is: ${number}`);
    }
    console.log(`Result is: ${total / numbers.length}`);
}
arithmeticMean([1,2,3,4,5]);