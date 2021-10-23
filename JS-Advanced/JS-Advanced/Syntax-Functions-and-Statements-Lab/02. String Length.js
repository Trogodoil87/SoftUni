function solve(...params) {
    let sum = 0;

    for (let i = 0; i < params.length; i++) {
        sum += params[i].length;
    }

    console.log(sum);
    console.log(Math.floor(sum / 3));
}

solve('chocolate', 'ice cream', 'cake');