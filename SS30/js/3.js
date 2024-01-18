let userInput = prompt("Nhập vào một chuỗi bất kỳ:");
const lettersArray = [];
const digitsArray = [];
const specialCharsArray = [];
for (let char of userInput) {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        lettersArray.push(char);
    } else if (char >= '0' && char <= '9') {
        digitsArray.push(char);
    } else {
        specialCharsArray.push(char);
    }
}
const resultArray = [...lettersArray, ...digitsArray, ...specialCharsArray];
console.log("Mảng ký tự sau khi sắp xếp:", resultArray);
