function sum(a, b) {
    return a + b;
} 
function subtract(a, b) {
    return a - b;
} 
function multiply(a, b) {
    return a * b;
} 
function divide(a, b) {
    return a / b;
}  
function doOps(a, b, op) {
    return op(a, b);
} 

console.log(doOps(1,2,sum))
