function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
} 
function callBack() {
    console.log("3 seconds have passed!")
} 
setTimeoutPromisified(3000).then(callBack)