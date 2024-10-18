//Filtering 
// given an input array , give back a array where outputs are all even 

const arr = ["shantanu", "Prash", "Man"];

function filterLogic(n) {
    if (n.startsWith("s")) {
        return true;
    } else {
        return false;
    }
} 

const ans = arr.filter(filterLogic);
console.log(ans);