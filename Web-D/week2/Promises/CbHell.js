function step1() {
    console.log("hi");
    setTimeout(step2,2000);
} 
function step2() {
    console.log("hello");
    setTimeout(step3, 3000);
} 
function step3() {
    console.log("hi there");
} 

setTimeout(step1,1000);