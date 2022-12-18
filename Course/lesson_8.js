//===================Lesson 8
//1. Напишите функцию, которая принимает массив чисел arr
// и возвращает все пары одинаковых элементов в виде двумерного массива
// Например const arr = [2,3,4,6,2,3,4,5,6]
//result = [[2,2],[3,3]]
// const arr = [2,3,4,6,2,3,4,5,6];
//
// function element(arr) {
//     const pairs = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 pairs.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return pairs;
// }
// console.log(element(arr)) //       [ [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 6, 6 ] ]

//===============================================
// const arr = [2,3,4,5]

// console.log(Math.min(...arr));

// const array2 = Array.of(1, 3, 5, 55, 848);
// const array3 = Array.of(...array2);
// array3.push(3)


// console.log(array2);
// console.log(array3);
// console.log(Math.max(...array3));
// console.log(array2.length);

// console.log(array2[array2.length -1]);  //last element of the aaray


// const arr = [1, 2, 3, 4];
// console.log(arr[4]);

// const arr = [1,2,3,4];
// newArr = arr.pop()
// console.log(arr.length);


//----------------------------------------------------------------------
// TASK 1 - can be on interwiew
// "1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20"

// let str = '';
// for (let i = 1; i <= 20; i++){
//   if (i % 5 == 0) str += i + ' ' + '\n';
//   else str += i + ' ';
// }
// console.log(str.trim());
//-----------------------------------------------------------------------
// TASK 2 - вывод значиний вместе с индексом в обратном порядке
// const arr = [1, 2, 3, 4, 'hej', null, 'j']
// for(let i = arr.length - 1 ; i >= 0; i--){
//   console.log([arr[i], i]);
// }
//
//------------------------------------------------------------------------
// TASK 3 - nestet loop //find first element in array with lettter c inside


//const arr = ['mama', 'leck', 'deckdegwfrsgsdrgh', 'dark'];
//console.log([arr[2].length]);

// function search(arr){
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++){
//       if(arr[i][j] == 'c') {
//         return arr[i];
//       }
//     }
//   }
// }

// console.log(search(arr));


//---------------------------------------------------------------------------
// TASK 4 - funcrtion getting an array of numbers
//Function

//================================== Полиндромы =================================================
// TASK 5.1 - from interview
//string reverse
// // check if it is the polindrome?
// function isPolindrome(x){
//   x = x.toLowerCase();
//   let str = '';
//   for (let i = x.length - 1; i >= 0; i--){
//     str += x[i]
//   }
//   return str;
// }
// console.log(isPolindrome("palindrome"))
// TASK 5.2 - напишите функция палиндром, которая принимает строку и опредиляет, являеться ли она
// после удаление всех пробелов. Выполните проверку на примере даной строки "was it a cat or a cat i saw"
// let str1 = 'fekjbfjhbehjd dwkuflbed dekfb'
// let str2 = 'was it a car or a cat i saw';
// function isPolindrome(str){
//     let reverseStr = "";
//     let strnospaces = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         if (str[i] !== " ") {
//             reverseStr += str[i]
//         }
//     }
//     for (let i = 0; i < str.length; i++){
//         if(str[i] !== " "){
//             strnospaces += str[i]
//         }
//     }
//     return reverseStr === strnospaces;
// }
// console.log(isPolindrome(str2))

//----------------------------------------------------------------------------
// TASK 6 - number that closer to 0

// const arr = [1, 2, -8, -3, 5];
// let min = Math.abs(arr[0]);
// let ind = 0;

// for (let i = 1; i < arr.length; i++){
//   let el = Math.abs(arr[i]);
//   if (el < min) {
//     min = el;
//     ind = i;
//   }
// }

// console.log(arr[ind])   // 1


// let res = 0;
// for (let i =0; i < 5; i++){
//   res += i;
// }
// console.log(res);

//=============================================================================================
// let my_numbers = [1,2,3,4,5]
//
// function findTotal(my_numbers){
//     let sum = 0;
//     for(let i = 0; i < my_numbers.length; i++){
//         if (my_numbers[i] % 2 == 0){
//             sum += 1
//         } else if (my_numbers[i] % 2 !== 0){
//             sum +=3
//         } else if (my_numbers[i] == 5){
//             sum += 5
//         }
//
//     }
//     console.log(sum)
// }
// findTotal(my_numbers)
//=================================================================================================
//2. Последовательности чисел фибоначчи
//Создайте функцию, которая получает число n и возвращает последовательность чисел фибоначчи
// let n = 7;
// function fibo(n) {
//     const arr = [0, 1];
//     for(let i = 2; i < n; i++){
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//     return arr
// }
// console.log(fibo(n))

//=======
// 3. функция isBreakets которая принимает строку s, содержащую скобки []
// проверяет правильность расстановки скобок. возвращает valid or invalid
// function isBreakets(s){
//     let result = [];
//     for(let i = 0; i < s.length; i++ ){
//         if(s[i] === "[") {
//             result.push(s[i])
//         } else if (s[i] === "]"){
//             if(result[result.length - 1] === "[") result.pop();
//             else return 'invalid';
//         }
//     }
//     return result.length === 0 ? 'valid':'invalid'
// }
//
// console.log(isBreakets('[[]][[]][[][][]]'))
//==========================.map
//Дан масив десятичных чисел arr, Необходимо вернуть новый масив чисел, содержащий елементы исходного, приччем для
// чисел имеющий четный индекс, произвести округление до ближайшего целого, а для нечетных вернуть 0
// const arr = [1.223, 3.431, 2.21232, 3.8, 10.32, 33.0];
// const nums = arr.map((el, i) => i % 2 === 0 ? Math.round(el) : 0);
// console.log(nums);   //[ 1, 0, 2, 0, 10, 0 ]

//=======уникальные элементы в массиве
// вернуть уникальные елементы в массиве в новом массиве из arr
//const arr = [-1, -3, 2, 3, 5, 10, 3, 34, 34, 222, -3, 5];
// const equal = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
// console.log(equal)  //[ -1, 2, 10, 222 ]
//=============================дубликаты в масиве
// //const notequal = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
// //console.log(notequal);   //[-3,  3,  5, 3, 34, 34, -3, 5]
// ========== вывести только один елемент из дубликатов
//  const result = arr.filter((el, i) => i === arr.indexOf(el));
//  console.log(result)   // [-1, -3, 2, 3, 5, 10, 34, 222]
// вернуть массив дубликатов, при этом каждый элемент один раз и в том порядке в котором он представлен последний раз
// const result = arr.filter ((el,i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el)  )
// console.log(result);m

//=======  пример использования всех методов
// const arr = ['1 4 44 hf 84 0000 546 Gfa 3721'];
// const res = arr.join()    //1 4 44 hf 84 0000 546 Gfa 3721
//     .split(' ')   // ['1','4','44','hf','84', '0000', '546', 'Gfa', '3721']
//     .map(el => +el)
//     .filter(el => !isNaN(el))
//     .reduce((acc, curr) => acc + curr)
// console.log(res)         //4400a











