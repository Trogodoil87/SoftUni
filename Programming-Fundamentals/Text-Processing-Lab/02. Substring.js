function solve(text, startIndex, count) {
    startIndex = Number(startIndex);
    count = Number(count);
    
    console.log(text.substr(startIndex, count));
}

solve('ASentence', 1, 8);