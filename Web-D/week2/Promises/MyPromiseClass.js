
class Promise{
    constructor(fn) {
        this.fn = fn;
        this.fn(() => {
            this.resolve();
        })
    }    
    then(callback) {
        this.resolve = callback;
    }  
} 

function readTheFile(resolve) {
    console.log("readFile called");
    setTimeout(function() {
        console.log("callBack based timeout completed");
        resolve();
    }, 3000);
} 
function SetTimeoutPromisified() {
    return new Promise(readTheFile);
} 

const p = SetTimeoutPromisified;
function callback() {
    console.log("callback is called ");
} 

p.then(callback);