function carCrate(arr) {
    let index = 1;
    arr.sort((a, b) => a.localeCompare(b)).forEach(name => {
        console.log(`${index}.${name}`);
        index++;
    });;
}

carCrate(["John", "Bob", "Christina", "Ema"]);