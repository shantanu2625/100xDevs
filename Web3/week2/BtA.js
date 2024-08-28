function BytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte).join())
} 