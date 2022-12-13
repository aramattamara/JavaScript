function countPositivesSumNegatives(input) {
    let sum = [0, 0]
    for (let i = 0; i < input.length; i++){
        if (input[i] >= 0){
            sum[0] += input[i];
        } else {
            sum[1] += input[i];
        }
    }
}

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(input))


