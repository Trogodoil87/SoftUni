function solve(arr) {
    let output = [];

    for (let i = 0; i < 2; i++) {
        let smallestNumber = Math.min(...arr).toString();
        let index = arr.toString().split(',').indexOf(smallestNumber);
        let spliced = arr.splice(index, 1);
        output.push(spliced);
    }

    console.log(output.join(' '));

  
}

solve([30, 15, 50, 5]);