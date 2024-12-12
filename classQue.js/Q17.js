function digitsum(n){
    var sum = 0 ;
    if ( n <  0 ){
        return "give right number "
    }
    else {
        while (n!= 0 ){
            var rem = n% 10 ;
            
            sum = sum + rem ;
            n = Math.floor(n/10) ;

        }
    }
    return sum ; 
}
console.log(digitsum(58))