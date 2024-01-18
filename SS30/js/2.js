function printOddNumbers(n) {
    let oddNumbers = [];
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        oddNumbers.push(i);
        sum += i;
    }
    if (sum % 2 === 0) {
        oddNumbers.push(n);
    }
    console.log("Các số nguyên dương lẻ là:", oddNumbers);
}
let n = parseInt(prompt("Nhập số nguyên dương n:"));
printOddNumbers(n);
