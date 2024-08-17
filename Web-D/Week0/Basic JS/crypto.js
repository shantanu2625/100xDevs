// const crypto = require('crypto');

// const input = "Shantanu";
// const hash = crypto.createHash('sha256').update(input).digest('hex');

// console.log(hash)

const crypto = require('crypto');
const input = "Shan"
const hash = crypto.createHash('sha512').update(input).digest('base64url');
console.log(hash)