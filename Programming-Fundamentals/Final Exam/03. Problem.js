function solve(input) {
    let users = {};
    let commands = {
        Add: (users, [user]) => {
            if (!users.hasOwnProperty(user)) {
                users[user] = [];
            } else {
                console.log(`${user} is already registered`);
            }
        },
        Send: (users, [user, mail]) => {
            if (users.hasOwnProperty(user)) {
                users[user].push(mail);
            }
        },
        Delete: (users, [user]) => {
            if (users.hasOwnProperty(user)) {
                delete users[user];
            } else {
                console.log(`${user} not found!`);
            }
        }
    };
    while (input[0] !== 'Statistics') {
        let [name, ...args] = input.shift().split('->');
        let command = commands[name];
        command(users, args);
    }

    console.log(`Users count: ${Object.keys(users).length}`);
    Object.entries(users).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])).forEach(ele => {
        console.log(`${ele[0]}`);
        ele[1].forEach(e => {
            console.log(` - ${e}`);
        })
    });
}

solve(["Add->Mike",
    'Add->Asan',

    "Add->George",

    "Send->George->Hello World",

    "Send->George->Some random test mail",

    "Send->Mike->Hello, do you want to meet up tomorrow?",

    "Send->George->It would be a pleasure",

    "Send->Mike->Another random test mail",

    "Statistics"]);