function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let currentKnums = result.slice(result.length - k >= 0 ? result.length - k : 0).reduce((a, b) => a + b, 0);
        result.push(currentKnums);
    }

   return result;
}

solve(6, 3);