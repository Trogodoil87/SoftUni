function solve(searchWord, text) {
    let output = `${searchWord} not found!`;

    text = text.split(' ').map((v, i) => v.toLowerCase());
    if (text.includes(searchWord)) {
        output = searchWord;
    } 

    console.log(output);
}

solve('javascripts',
    'JavaScript is the best programming language');