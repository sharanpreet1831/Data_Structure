function captialLetter (str){
    if (!str || typeof str !== 'string'){
        return '';

    }
    const output = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    return output ;
}
var str = "hello world "
console.log(captialLetter(str));