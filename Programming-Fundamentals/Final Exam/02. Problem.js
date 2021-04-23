function solve(input) {
    let n = Number(input.shift());
    let count = 0;
    for (let i = 0; i < n; i++) {
        let line = input[i];
        let pattern = /((U\$)(?<name>[A-Z][a-z]{2,})(\2)(P@\$)(?<pass>[A-Za-z]{5,}[0-9]{1,})(\5))/gm;

        let tokens = pattern.exec(line);

        if (tokens) {
            console.log(`Registration was successful`);
            console.log(`Username: ${tokens.groups.name}, Password: ${tokens.groups.pass}`);
            count++;
        } else {
            console.log(`Invalid username or password`);
        }
    }

    console.log(`Successful registrations: ${count}`);
}

solve([

    "3",

    "U$MichaelU$P@$asdqwe123P@$",

    "U$NameU$P@$PasswordP@$",

    "U$UserU$P@$ad2P@$"

]);