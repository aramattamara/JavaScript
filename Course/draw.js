//let a = "abc";
//console.log(a.repeat(3));
//================================================================================================
// for (let i = 1; i <= 5; i++){
//      console.log((i + " ").repeat(i)) }
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
//=================================================================================================
// for (let i = 5; i >= 1; i--){
//     console.log((i + " ").repeat(6 - i))
// }
// 5
// 4 4
// 3 3 3
// 2 2 2 2
// 1 1 1 1 1
//==================================================================================================
// for(let i = 1; i <= 5; i++){
//     console.log((i + " ").repeat(6- i))
// }
// 1 1 1 1 1
// 2 2 2 2
// 3 3 3
// 4 4
// 5
//==================================================================================================
// for(let i = 1; i <= 5; i++){
//     console.log(" ".repeat(5 - i) + (i + " ").repeat(i))
// }
//     1
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5
//==================================================================================================
// for (let i = 1; i <= 5; i++){
//     let str = "";
//     for(let j = 1; j <= 6 - i; j++){
//         str += j;
//     }
//     console.log(str)
// }
// 12345
// 1234
// 123
// 12
// 1
//==================================================================================================
// for (let i = 1; i <= 5; i++){
//     let str = "";
//     for(let j = i; j <= 5; j++){
//         str += j;
//     }
//     console.log(str)
// }
// 12345
// 2345
// 345
// 45
// 5
//====================================================================================================
// let numbers = 1;
// for (let i = 1; i <= 5; i++){
//     let str = "";
//     for(let j = 1; j <= i; j++){
//         str += numbers + " ";
//             numbers ++;
//     }
//     console.log(" ".repeat(5-i) + str)
// }
//      1
//     2 3
//    4 5 6
//   7 8 9 10
// 11 12 13 14 15
//==================================================================================================