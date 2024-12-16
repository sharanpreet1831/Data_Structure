function findMaxInJaggedArray(arr) {
    
    return arr.reduce((max, element) => {
        if (Array.isArray(element)) {
            
            return Math.max(max, findMaxInJaggedArray(element));
        } else if (typeof element === "number") {
           
            return Math.max(max, element);
        }
        
        return max;
    }, -Infinity); 
}


const jaggedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];
const maxNumber = findMaxInJaggedArray(jaggedArray);
console.log(maxNumber); 