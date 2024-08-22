function random(resovle) {
    setTimeout(resovle,4000);
}



const p = new Promise(random);

function callback() {
    console.log("promise succeeded")
} 
p.then(callback)