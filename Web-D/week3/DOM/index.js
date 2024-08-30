// // let ctr = 0;
// // function callback() {
// //     console.clear();
// //     console.log(ctr);
// //     ctr = ctr + 1;
// // } 
// // setInterval(callback,1000);



// // setInterval() 

document.querySelectorAll("h4")[0] = StopWatch();

function StopWatch() {
    let counter = 0;
    function callback() {
        console.clear(); 
        const el = document.querySelectorAll("h4")[0]; 
        el.innerHTML = counter;
        counter = counter + 1; 
        console.log(ctr); 

    }  
    setInterval(callback,1000);

}