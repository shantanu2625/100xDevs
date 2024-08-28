function AsciiToBytes(Asciii) {
    const byteArray = [];
    for (let i = 0; i < Asciii.length; i++) {
        byteArray.push(Asciii.charCodeAt(i));
    } 
    return byteArray;
}

const Ascii = "Hello";
const byteArray = AsciiToBytes(Ascii);
console.log(byteArray);