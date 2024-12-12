var arr = [12, -5, 34, -10, 56, -22, 90, -3];
const output = arr.reduce((acc,curr) =>{
    if (acc < curr){
        acc = curr
    }
    return acc
},0) 
console.log(output);