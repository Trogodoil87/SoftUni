function solve(text) {
    let input = text.split('|');
    let room = 1;
    let health = 100;
    let bitCoins = 0;
    let output = [];


    while (input.length > 0) {
        let [monster, amount] = input.shift().split(' ');
        amount = Number(amount);
        switch (monster) {
            case 'potion':
                if (health + amount >= 100) {
                    output.push(`You healed for ${Math.abs(health - 100)} hp.`)
                    health = 100;
                    output.push(`Current health: ${health} hp.`)
                } else {
                    output.push(`You healed for ${amount} hp.`)
                    health += amount;
                    output.push(`Current health: ${health} hp.`)
                }
                break;
            case 'chest':
                bitCoins += amount;
                output.push(`You found ${amount} bitcoins.`);
                break;
            default:
                if (health - amount > 0) {
                    output.push(`You slayed ${monster}.`);
                    health -= amount;
                } else {
                    output.push(`You died! Killed by ${monster}.\nBest room: ${room}`);
                    console.log(output.join('\n'));
                    return;
                }
                break;
        }
        room++;
    }

    console.log(output.join('\n'));
    console.log(`You've made it!\nBitcoins: ${bitCoins}\nHealth: ${health}`);
}

solve(

    'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');