function getFibonator() {
    let index = 1;
    let num = 0;
    let output = 0;
    function fibonachi() {
        output = num + index;
        index = num;
        num = output;
        
        return num;
    }

    return fibonachi;
}
let fib = getFibonator();

console.log(fib()); // 1 

console.log(fib()); // 1 

console.log(fib()); // 2 

console.log(fib()); // 3 

console.log(fib()); // 5 

console.log(fib()); // 8 

console.log(fib()); // 13 