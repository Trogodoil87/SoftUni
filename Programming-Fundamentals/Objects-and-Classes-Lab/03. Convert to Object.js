function jsonToObject(jsonInput) {
    let person = JSON.parse(jsonInput);

    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}

jsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');