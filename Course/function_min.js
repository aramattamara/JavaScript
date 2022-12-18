// const a = [6, 3, 10, 13, -1, -34];
//
// function min(arrArg){
//     let minNum = arrArg[0];
//     for(let i = 0; i < arrArg.length; i++){
//         if(minNum > arrArg[i]) minNum = arrArg[i];
//     }
//     console.log(minNum);
//     return minNum;
//
// }
// min(a);
//
// function delMin(a, min){
//     const a2 = [];
//     const delNum = min(a);
//
//     console.log(delNum);
//
//     for (let i of a) {
//         if(i !== delNum){
//             a2.push(i)
//         }
//     }
//     console.log(min(a));
//     console.log(a2)
// }
// delMin(a,min)


//======================================возвращение правильной строки=========================
// function correctLetter (string){
//     return string.replace(/[0,1,2]/g, swap);
// }
// console.log(correctLetter('I l0ve my 200'))
//
// function swap(char){
//     let str = '0, 1, 2';
//     let i = str.indexOf(char);
//     let str2 = 'o, l, z';
//     return str2[i];
// }
//==== функция перевода фаренгейта в цельсии ====
// function fahrenheitToCelcium(f){
//     let c = ((f - 32) * (5/9)).toFixed(2) ;
//     return c;
// }
// console.log(fahrenheitToCelcium(350))

//TASK == function
// let my_numbers = [5, 3, 4, 10]
//
// function findTotal(my_numbers){
//     let sum = 0;
//     for(let i = 0; i < my_numbers.length; i++){
//         if (my_numbers[i] % 2 === 0){
//             sum += 1
//         }  else if (my_numbers[i] % 2 !== 0 && my_numbers[i] !== 5){
//             sum +=3
//         } else if (my_numbers[i] === 5){
//             sum += 5
//         }
//     }
//     console.log(sum)
// }
// findTotal(my_numbers)