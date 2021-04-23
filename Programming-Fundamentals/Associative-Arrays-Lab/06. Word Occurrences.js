function occurredWord(input) {
    let storage = {};

    for (let word of input) {
        if (!storage.hasOwnProperty(word)) {
            storage[word] = 0;
        }

        storage[word] += 1;
    }

    let sorted = Object.entries(storage).sort((a, b) => b[1] - a[1]);

    for (let key of sorted) {
        console.log(`${key[0]} -> ${key[1]} times`);
    }
}

occurredWord(["Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence"]);