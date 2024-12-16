
function countWords(str){
    if (!str || typeof  str !=='string' ){
        return 0 ;
    }
    const word = str.trim().split(/\s+/);
    return word.length;
}
var  str="Sharanpreet Singh     ";

console.log(countWords(str));
