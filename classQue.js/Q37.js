function ArrayOfCharCode(str){
    if (!str || typeof str !== 'string'){
        return "invalid"
    }
    return str.split('').map(word => word.charCodeAt(0));

}
var ans =  "hello"
console.log(ArrayOfCharCode(ans));
