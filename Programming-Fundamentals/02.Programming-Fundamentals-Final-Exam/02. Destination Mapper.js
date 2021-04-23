function solve(input) {
    let pattern = /(=|\/){1}(?<word>[A-Z][A-Za-z]{2,})\1/g;
    let sum = 0;
    let travels = [];
    if (pattern.test(input)) {
        let destionation = input.match(pattern);

        destionation.forEach(ele => {
            sum += ele.length - 2;
            travels.push(ele.slice(1, ele.length - 1));
        })
    }

    console.log(`Destinations: ${travels.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}

solve(`=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=`);