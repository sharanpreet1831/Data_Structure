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
console.log(isPrime(12));