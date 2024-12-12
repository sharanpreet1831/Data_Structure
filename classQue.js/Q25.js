function uniqueElements (arr1 , arr2 ){
    const diff1 = arr1.filter(ele => !arr2.includes(ele));

   
    const diff2 = arr2.filter (ele => !arr1.includes(ele));
   
    const unique = diff1.concat(diff2);
    return unique
}
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

console.log(uniqueElements(array1,array2));