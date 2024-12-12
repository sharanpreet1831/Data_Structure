// For loop 

const arr = [1, 2, 3, 4, 5];
for (var i =0 ; i<arr.length ; i++){
    console.log(`for loop ${arr[i]}`)
}

//For of loop 
for ( let ele of arr){
    console.log( `for of loop ${ele}`);
}

//for each loop 
arr.forEach((value,index)=> {
    console.log(`for each loop ${value}`);
})

// map 
const output = arr.map((ele) => ele * 2 );
console.log(`map ${output}`);

//filter 
const output2 = arr.filter((ele) => ele>2 );
console.log(output2)

// every 
const alleven = arr.every(value => value %2 ===0 )
console.log(alleven);

//some 
const hasEven = arr.some(value => value % 2 === 0);
console.log(hasEven)

//find 
const firstEven = arr.find(value => value % 2 === 0);
console.log(firstEven);

//key 
const keys = arr.keys();
for (let key of keys) {
  console.log(key); 
} 