function MergeArray(arr1 , arr2 ){
    const output = arr1.concat(arr2);
    return output;
}

var arr1 = [1,2,3,4,5,6,7];
var arr2 = [6,7,8,9];

console.log(MergeArray(arr1,arr2))