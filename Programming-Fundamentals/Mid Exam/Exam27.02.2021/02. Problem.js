function party(input) {
    let partyList = input.shift().split(', ');
    let lostedCount = 0;
    let blacklistedCount = 0;

    for (let line of input) {
        let [command, firstArg, secondArg] = line.split(' ');

        if (command === 'Blacklist') {
            let name = firstArg;
            let index = partyList.indexOf(name);

            if (index < 0) {
                console.log(`${name} was not found.`);
            } else {
                console.log(`${name} was blacklisted.`);
                partyList[index] = `Blacklisted`;
                blacklistedCount++;
            }
        } else if (command === 'Error') {
            let indexOfUser = Number(firstArg);
            let user = partyList[indexOfUser];
            
            if (user !== 'Blacklisted' && user !== 'Lost') {
                console.log(`${partyList[indexOfUser]} was lost due to an error.`);
                partyList[indexOfUser] = `Lost`;
                lostedCount++;
            }
        } else if (command === 'Change') {
            let indexOfUser = Number(firstArg);
            let newName = secondArg;

            if (indexOfUser >= 0 && indexOfUser < partyList.length) {
                console.log(`${partyList[indexOfUser]} changed his username to ${newName}.`);
                partyList[indexOfUser] = newName;
            }

        } else if (command === 'Report') {
            break;
        }
    }

    console.log(`Blacklisted names: ${blacklistedCount}\nLost names: ${lostedCount}\n${partyList.join(' ')}`);
}

party((["Mike, John, Eddie" ,

"Blacklist Mike",

    "Error 0",

    "Error 1",

    "Change 2 Mike123",

    "Report"]));