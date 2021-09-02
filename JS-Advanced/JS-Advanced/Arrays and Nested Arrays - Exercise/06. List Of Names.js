function solve(inputNames) {
    let count = 1;
    inputNames.sort((a, b) => a.localeCompare(b)).forEach(name => {
        console.log(`${count++}.${name}`);
    })
}

solve(["John", "Bob", "Christina", "Ema"]);