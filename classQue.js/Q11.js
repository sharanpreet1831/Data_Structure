var arr = [12, 34, 56, 78, 90]; 
var n = arr.length;
const output = arr.reduce((acc, curr) => {
    acc += curr /n
    return acc
},0)
console.log(output)