function SetTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
} 

function callback() {
    console.log("hi there 3 seconds have passed!")
} 

SetTimeoutPromisified(5000).then(callback);