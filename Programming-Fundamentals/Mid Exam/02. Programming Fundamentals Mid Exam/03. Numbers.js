function solve(input) {
    input = input.split(' ').map(Number);
    let average = input.reduce((acc, el) => acc + el, 0) / input.length;
    let output = input.filter((v, i) => v > average).sort((a, b) => b - a).filter((v, i) => i < 5);
    
    console.log(output.length <= 0 ? `No` : output.join(' '));
}
// solve([-1, -2, -3, -4, -5, -6]);
solve('10 20 30 40 50');
// solve(['10', '20', '30', '40', '50']);