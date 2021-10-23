function carCrate(numbers) {
    let currentMax = Number.MIN_SAFE_INTEGER;
    let output = [];

    for (const num of numbers) {
        if (currentMax < num || currentMax === num) {
            currentMax = num;
            output.push(num);
        }
    }

    return output;
}

carCrate([1,

    3,

    8,

    4,

    10,

    12,

    3,

    2,

    24]);