function solution(number) {
   return function add(add) {
       return number * add;
   }
}


let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));