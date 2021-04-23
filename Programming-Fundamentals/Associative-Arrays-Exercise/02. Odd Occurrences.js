function track(input) {
    let words = {};

    for (let word of input.split(' ')) {
        word = word.toLowerCase();

        if (!words.hasOwnProperty(word)) {
            words[word] = 0;
        }

        words[word] += 1;
    }

    let sorted = Object.entries(words).filter((v, i) => v[1] % 2 === 1).sort((a, b) => b[1] - a[1]);
    let output = sorted.map((v, i) => v[0]).join(' ');
    
    console.log(output);
}

track('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');