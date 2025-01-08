var arr = [10,8,11,13,12,17,9]

let longest = 1 ;
var  current = 1 ;
var n = arr.length;
console.log(n);
arr.sort((a,b) => a-b)


for (let  i =1 ; i < arr.length ; i++ ){
    console.log("a");
    
    if (arr[i] === arr[i - 1] + 1) {
      
        current = current + 1 ;
    }
    
    
    
    
    
}
console.log(current);
