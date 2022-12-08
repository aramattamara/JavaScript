//reverse without extra array / reverse "на месте"
// Task from interview "Apple"

const  arr = [12, 13, 14, 15, 18, 20];
for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

console.log (arr)