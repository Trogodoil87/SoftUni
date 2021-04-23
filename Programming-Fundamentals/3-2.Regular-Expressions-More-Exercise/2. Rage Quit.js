function solve(input) {
    let series = input[0].split(/[0-9]+/).filter((v) => v !== '').map(v => v.toUpperCase());
    let repeats = input[0].split(/[^0-9]+/).filter((v) => v !== '');
    let result = '';

    for (let i = 0; i < series.length; i++) {
        for (let r = 0; r < repeats[i]; r++) {
            result += series[i];
        }
    }

    console.log(`Unique symbols used: ${[...new Set(result)].length}`);
    console.log(result);
}

solve(['aSd2&5s@1']);