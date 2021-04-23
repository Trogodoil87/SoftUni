function jsonConvertToDictonary(jsonString) {
    let jsonsArr = [];

    for (let text of jsonString) {
        let props = text.split(':');
        let term = props[0].split('"').filter((v, i) => i === 1).join('');
        let definition = props[1].split('"').filter((v, i) => i === 1).join('');
        let obj = {
            Term: term,
            Definition: definition
        }
        let index = isDuplicate(term, jsonsArr);
        if (index !== -1) {
            jsonsArr[index] = obj;
        } else {
            jsonsArr.push(obj);
        }
    }

    let sorted = jsonsArr.sort((a, b) => a.Term.localeCompare(b.Term));
    
    for (let obj of Object.values(sorted)) {
        console.log(`Term: ${obj.Term} => Definition: ${obj.Definition}`);
    }

    function isDuplicate(name, arr) {
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            if (obj.Term === name) {
                return i;
            }
        }

        return -1;
    }

}

jsonConvertToDictonary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}'

]);