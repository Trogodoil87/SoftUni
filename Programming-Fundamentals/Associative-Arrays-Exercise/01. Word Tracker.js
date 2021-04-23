function track(input) {
    let storage = {};
    let wordsToLookFor = input.shift().split(' ');

    for (let word of wordsToLookFor) {
        if (!storage.hasOwnProperty(word)) {
            storage[word] = 0;
        }
    }

    for (let word of input) {
        if (storage.hasOwnProperty(word)) {
            storage[word] += 1;
        }
    }

   Object.entries(storage).sort((a, b) => b[1] - a[1]).forEach(ele => {
       console.log(`${ele[0]} - ${ele[1]}`);
   });
}

track([

    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'

]);