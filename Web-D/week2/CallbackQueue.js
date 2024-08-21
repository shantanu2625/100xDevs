function fn() {
    console.log("After timeout: ");
} 
setInterval(fn, 1000);

let c = 0;

function cIn() {
    c++;
} 
for (let i = 0; i<= 1000000000; i++) {
    setTimeout(cIn, 0);
}