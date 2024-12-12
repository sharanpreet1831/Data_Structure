function filter (arr,n){
    var newarr = []
    for ( let i=0 ; i<n ; i++) {
        if (arr[i]> 0 ){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}


var arr = [12, -5, 34, -10, 56, -22, 90, -3];
var n = arr.length;
console.log(filter(arr,n));
