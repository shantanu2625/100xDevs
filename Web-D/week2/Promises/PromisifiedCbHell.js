function callBackPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
} 

callBackPromisified(1000).then(function(){
    console.log("hi");
    callBackPromisified(2000).then(function(){
        console.log("hello")
        callBackPromisified(3000).then(function(){
            console.log("hi there");
        });
    });
});