//DESCRIPTION:
//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//Examples:
//
//* 'abc' =>  ['ab', 'c_']
//* 'abcdef' => ['ab', 'cd', 'ef']

//My solution_1
function solution(str){
  if (str.length % 2 == 1) {
    str += "_";
  }
  return str
    .split(/(..)/)
    .filter(s => s != '');
}

//My solution_2
function solution(str) {

  if (str.length == 0) {
    return [];
  }

  if (str.length == 1) {
    return [str + '_'];
  }

  let a = solution(str.slice(2));

  a.unshift(str.slice(0, 2));

  return a;
}
