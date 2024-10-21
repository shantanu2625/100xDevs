const users = [
    { username: "Shan", password: "123123"},
    { username: "John", password: "123123"},
    { username: "bob", password: "123123"}
] 

const username = "Shan";
const password = "123123";

const user = users.find(user => user.username === username && user.password === password);

console.log(user);