function capitalizeLastCharacter(inputString) {
    const words = inputString.split(' ');

    const modifiedWords = words.map(word => {
        if (word.length > 0) {
            const lastIndex = word.length - 1;
            return word.slice(0, lastIndex) + word[lastIndex].toUpperCase();
        } else {
            return word;
        }
    });

    const resultString = modifiedWords.join(' ');

    return resultString;
}

const userInput = prompt("Nhập vào một chuỗi bất kỳ:");

const modifiedString = capitalizeLastCharacter(userInput);
console.log("Chuỗi sau khi chỉnh sửa:", modifiedString);