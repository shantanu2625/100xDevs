const bcrypt = require('bcrypt');

async function hashPassword(somePlainTextPassword) {
    const saltRounds = 10; // computationally expensive rounds
    const hash = await bcrypt.hash(somePlainTextPassword, saltRounds);
    return hash;


} 

hashPassword('shanshanshan').then(hash => console.log(hash))