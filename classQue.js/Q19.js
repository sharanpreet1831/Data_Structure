
function calculateprime( start , number){
    let count = 0 ; 
    for (var i = start ; i< 1000 ; i++){
        if (isPrime(i) ){
            if (count < number ){
                count ++ 
                console.log(i);
            }
        }
    }
}
function isPrime(n){
    if (n == 1 ){
        return true ;
    }
    else if (n == 2 ){
        return true ;
    }
    for (var i = 2 ; i< n ; i++){
        if (n % i == 0 ){
            return false ;
        }
    }
    return true ;
}


const start = 10 ;
const numberofprime = 5 ;

calculateprime(start,numberofprime);