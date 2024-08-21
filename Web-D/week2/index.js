function fetchData(callBack) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            callBack(null, "data fetched succesfully!");
        } else {
            callBack(new Error("failed to fetched data"));
        
            
        }
    }, 1000)
} 

fetchData((err,data) => {
    if (err) {
        console.log("Error: ", err.message);
    } else {
        console.log("Data: ", data);
    }

});

