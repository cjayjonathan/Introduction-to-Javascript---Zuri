function calculator(){
    this.sum = function(a, b){
        return(a+b);
    };
    this.multiply = function(a, b){
        return(a*b);
    };
    this.divide = function(a, b){
        return(a/b);
    };
    this.subtract = function(a, b){
        return(a-b);
    };
}

const a = 20;
const b = 10;
const calculate = new calculator();
console.log( "Sum "+calculate.sum(a, b) );
console.log( "Subtract "+calculate.subtract(a, b) );
console.log( "Multiply "+calculate.multiply(a, b) );
console.log( "Divide "+calculate.divide(a, b) );