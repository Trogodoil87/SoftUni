function solve(commandsArr) {
    let resultArr = [];
    for (let i = 1; i <= commandsArr.length; i++) {
       if (commandsArr[i - 1] === 'add') {
           resultArr.push(i);
       } else {
           resultArr.pop();
       }
    }

    console.log(resultArr.length > 0 ? resultArr.join('\n') : 'Empty');
}

solve(['add',

    'add',

    'remove',

    'add',

    'add']);