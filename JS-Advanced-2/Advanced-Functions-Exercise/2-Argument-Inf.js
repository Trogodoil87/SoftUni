function solve(...args) {
    let obj = {};
    for (const arg of args) {
        let currentType = typeof arg;

        if (!obj.hasOwnProperty(currentType)) {
            obj[currentType] = {
                count: 0
            };
        }

        obj[currentType].count++
        obj[currentType][currentType] = arg;

    }
    let result = [];

    for (const key in obj) {
        result.push(`${key}: ${obj[key][key]}`);
    }
    let sortedObj = Object.entries(obj).sort((a,b) => b[1].count - a[1].count);

    // for (const key in sortedObj) {
    //     result.push(`${key} = ${sortedObj[key].count}`);
    // }
    
    console.log(result.join('\n'));
}

solve('cat', 42, function () { console.log('Hello world!'); }, 'dog', 22, 30);