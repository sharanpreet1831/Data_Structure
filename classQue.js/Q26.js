function arrayUniqueElement(arr1,arr2){
    const diff1 = arr1.filter(ele => !arr2.includes(ele));
    return diff1
} 
var arr1 = [1,2,3,4];
var arr2 = [3,4,5,6];
console.log(arrayUniqueElement(arr1,arr2));