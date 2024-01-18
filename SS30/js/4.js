function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function printPrimeNumbers(arr) {
    console.log("Các số nguyên tố trong mảng là:");

    for (let element of arr) {
        if (isPrime(element)) {
            console.log(element);
        }
    }
}
let myArray = [2, 3, 5, 7, 10, 17, 20];
printPrimeNumbers(myArray);
