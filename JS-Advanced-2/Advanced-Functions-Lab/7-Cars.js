function result(params) {
    let obj = {};

    for (const param of params) {
        let splitedParam = param.split(' ');


        let commands = {
            create: (objName) => {
                obj[objName] = {};
            },
            inherit: (target, source) => {
                obj[target] = obj[target] = Object.assign(obj[target], obj[source]);
            },
            set: (source, propName, propValue) => {
                obj[source][propName] = propValue;

            },
            print: (source) => {
                console.log(obj[source]);
            }
        }

        if (splitedParam.length === 2) {
            let [commandName, objName] = splitedParam;
            let command = commands[commandName];
            command(objName);
        } else if (splitedParam.length === 4) {
            let [commandName, objName, propName, propValue] = splitedParam;

            if (propName === 'inherit') {
                let createCommand = commands[commandName];
                if (!obj.hasOwnProperty(objName)) {
                    createCommand(objName);
                }

                let inheritCommand = commands[propName];
                inheritCommand(objName, propValue);
            } else if (commandName === 'set') {
                let setCommand = commands[commandName];
                setCommand(objName, propName, propValue);
            } else if (commandName === 'print') {
                let printCommand = commands[commandName];
                printCommand();
            }
        }
    }
}

result(['create c1', 

'create c2 inherit c1', 

'set c1 color red', 

'set c2 model new', 

'print c1', 

'print c2'] );