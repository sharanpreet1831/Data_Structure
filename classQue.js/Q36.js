function characterArray(str ){
   if (!str || typeof str !== 'string' ){
    return[];
   }
    var charArray = str.split('');
    return charArray;
}

console.log(characterArray("hello"))