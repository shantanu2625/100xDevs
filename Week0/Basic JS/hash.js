const crypto = require('crypto');

// Write a function to find a input string that produce a hash which starts with "00000" 

function findHashWithPrefix(prefix) {
    while (true) {
        let input = 0;
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return {input : inputStr, hash : hash};
        }
    input++;

    }     

} 
    //find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log('Input: ${result.input}');
console.log('Hash: ${result.hash}');
