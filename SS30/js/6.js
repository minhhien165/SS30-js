function countTriangles(arr) {
    const n = arr.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && arr[j] + arr[k] > arr[i]) {
                    count++;
                }
            }
        }
    }

    return count;
}

const integerArray = [4, 6, 3, 7];

const triangleCount = countTriangles(integerArray);
console.log("Số lượng tam giác có thể tạo ra là:", triangleCount);