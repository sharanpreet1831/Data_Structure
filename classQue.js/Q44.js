function binaryToNumber(binaryString) {
    
    return parseInt(binaryString, 2);
}


const binaryString = "1010"; 
const number = binaryToNumber(binaryString);
console.log(number); 