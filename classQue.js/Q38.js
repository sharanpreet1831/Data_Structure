function asciiArrayToString(asciiArray) {
    
    return asciiArray.map(code => String.fromCharCode(code)).join('');
}


const asciiCodes = [72, 101, 108, 108, 111];
const result = asciiArrayToString(asciiCodes);

console.log(result); 