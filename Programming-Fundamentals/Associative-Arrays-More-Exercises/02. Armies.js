function solve(input) {
    let army = {};

    for (let line of input) {
        if (line.includes('arrives')) {
            let index = line.indexOf('arrives');
            let leader = line.slice(0, index - 1);


            if (!army.hasOwnProperty(leader)) {
                army[leader] = {
                    total: 0
                };
            }
        } else if (line.includes('defeated')) {
            let index = line.indexOf('defeated');
            let leader = line.slice(0, index - 1);

            if (army.hasOwnProperty(leader)) {
                delete army[leader];
            }
        } else if (line.includes('+')) {
            let [name, count] = line.split(' + ');
            count = Number(count);

            for (let [leader, armyInfo] of Object.entries(army)) {
                if (armyInfo.hasOwnProperty(name)) {
                    army[leader][name] += count;
                    army[leader].total += count;
                }
            }

        } else if (line.includes(':')) {
            let [leader, armyProps] = line.split(': ');
            let [armyName, armyCount] = armyProps.split(', ');

            armyCount = Number(armyCount);

            if (army.hasOwnProperty(leader)) {
                if (!army[leader].hasOwnProperty(armyName)) {
                    let existing = army[leader];
                    existing[armyName] = armyCount;
                    army[leader].total += armyCount;
                }
            }
        }


    }
    let sorted = Object.entries(army).sort((a, b) => b[1].total - a[1].total).forEach(ele => {

        console.log(`${ele[0]}: ${ele[1].total}`);
        delete ele[1].total;
        Object.entries(ele[1]).sort((a, b) => b[1] - a[1]).forEach(ele => {
            console.log(`>>> ${ele[0]} - ${ele[1]}`);
        })
    });
}
solve([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']);