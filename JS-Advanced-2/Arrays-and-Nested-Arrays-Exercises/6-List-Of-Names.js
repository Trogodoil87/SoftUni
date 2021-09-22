function solve(arr) {
    let index = 1;
    arr.sort((a, b) => a.localeCompare(b)).forEach(name => {
        console.log(`${index}.${name}`);
        index++;
    });;
}

solve(["John", "Bob", "Christina", "Ema"]);