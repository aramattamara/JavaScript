const fs = require("fs");


const readFileLines = filename =>
    fs.readFileSync(filename)
        .toString('UTF8')
        .split('\n')
;
let dataArr = readFileLines('input.txt');
dataArr.push('');
//console.log(dataArr);


function count (dataArr) {
    let sum = 0;
    let maxSum = 0;
    let maxSum2 = 0;
    let maxSum3 = 0;
    for (let i = 0; i < dataArr.length; i++){
        if (dataArr[i] === '') {
            if (sum > maxSum) {
                maxSum3 = maxSum2;
                maxSum2 = maxSum;
                maxSum = sum;
            } else if (sum > maxSum2) {
                maxSum3 = maxSum2;
                maxSum2 = sum;
            } else if (sum > maxSum3) {
                maxSum3 = sum;
            }
            sum = 0;
            continue;
        }

        sum += Number(dataArr[i]);
    }
    console.log(maxSum, maxSum2, maxSum3);
    console.log(maxSum + maxSum2 + maxSum3);

    return maxSum;
}

count(dataArr)