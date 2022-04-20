function add(n){
    var sum = function(a){
        return add(n+a);
    };
    sum.valueOf = function(){
        return n;
    };
    return sum;
};