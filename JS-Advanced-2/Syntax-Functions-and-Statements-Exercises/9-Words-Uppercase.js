function solve(text) {
    let pattern = /\w+/gm
    let textArr = text.match(pattern).map((v, i) => v.toUpperCase()).join(', ');   
    console.log(textArr);
}

solve('aasda');