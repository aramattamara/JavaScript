const path = require("path");
const fs = require("fs");


let filepath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(filepath, "utf8");

let lines = input
    .split("\n");

const scores = lines
    .map((line) => {
        switch(line) {
            case 'C Z': //scissors - scissors
                return 3 + 3;
            case 'C Y': //scissors - paper
                return 0 + 2;
            case 'C X': //scissors - rock
                return 6 + 1;
            case 'A X': //rock - rock
                return 3 + 1;
            case 'A Z': //rock - scissors
                return 0 + 3;
            case 'A Y': //rock - paper
                return 6 + 2;
            case 'B Y': //paper - paper
                return 3 + 2;
            case 'B X': //paper - rock
                return 0 + 1;
            case 'B Z': //paper - scissors
                return 6 + 3;
        }
});


const answer = scores.reduce((acc, score) =>  {
    return acc + score;
}, 0);

/* end solution */

console.log(answer);
