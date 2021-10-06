function solve(props) {
    let result = [];

    let commands = {
        add: (str) => {
            result.push(str);
        },
        remove: (str) => {
            result = result.map((x, i) => x !== str ? x : ' ').filter((x) => x != ' ');
        },
        print: () => {
            console.log(result.join(','));
        }
    }

    for (const prop of props) {
        let [commandName, value] = prop.split(' ');
        let command = commands[commandName];
        command(value);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);