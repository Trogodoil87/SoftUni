function solve(input) {
    let leftString = input.slice(0, input.length / 2).split('').reverse().join('');
    let rightString = input.slice(input.length / 2, input.length).split('').reverse().join('');
    console.log(leftString);
    console.log(rightString);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');