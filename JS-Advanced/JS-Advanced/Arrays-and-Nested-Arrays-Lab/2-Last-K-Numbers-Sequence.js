function solve(n, k) {
    let sequnce = [1];
    for (let i = 1; i < n; i++) {
        let currentSum = sequnce.slice(sequnce.length - k >= 0 ? sequnce.length - k : 0).reduce((a, v) => a + v, 0);
        sequnce.push(currentSum);
    }

    return sequnce;
}

solve(6, 3);