let arr = [1,2,3,4,5]

function map(arr,cb) {
    let newArray = [] ;

    for (let i = 0 ; i < arr.length ; i++) {
    let result = cb(arr[i]);
    newArray.push(result);
 } 

    return newArray
}


function cb(num) {
    return num * 2;
}

let finalArray = map(arr,cb)

console.log(finalArray)
