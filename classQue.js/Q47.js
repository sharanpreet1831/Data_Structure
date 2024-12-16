function deepCopyJaggedArray(arr) {
   
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

   
    return arr.map(element => {
        if (Array.isArray(element)) {
            
            return deepCopyJaggedArray(element);
        }
        
        return element;
    });
}


const jaggedArray = [1, [2, 3], [4, [5, 6]], 7];
const copiedArray = deepCopyJaggedArray(jaggedArray);


// jaggedArray[1][0] = 99;

console.log("Original array:", jaggedArray); 
console.log("Copied array:", copiedArray);  