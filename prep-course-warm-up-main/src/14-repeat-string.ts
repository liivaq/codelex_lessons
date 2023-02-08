export {};

const repeatString = (value:string, length:number) => {
    return value.repeat(length);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
