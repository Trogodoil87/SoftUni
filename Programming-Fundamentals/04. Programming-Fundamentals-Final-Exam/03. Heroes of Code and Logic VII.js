function solve(input) {
    let actions = {
        TakeDamage: (heroes, [name, damage, attacker]) => {
            let hero = heroes[name];
            damage = Number(damage);

            hero.health -= damage;

            if (hero.health > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.health} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
            }
        },
        CastSpell: (heroes, [name, mpCost, spell]) => {
            let hero = heroes[name];
            mpCost = Number(mpCost);

            if (mpCost <= hero.mana) {
                hero.mana -= mpCost;
                console.log(`${name} has successfully cast ${spell} and now has ${hero.mana} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
        },
        Recharge: (heroes, [name, mpAmt]) => {
            let hero = heroes[name];
            mpAmt = Number(mpAmt);

            if (hero.mana + mpAmt > 200) {
                mpAmt = 200 - hero.mana;
            }

            hero.mana += mpAmt;
            console.log(`${name} recharged for ${mpAmt} MP!`);
        },
        Heal: (heroes, [name, hpAmt]) => {
            let hero = heroes[name];
            hpAmt = Number(hpAmt);

            if (hero.health + hpAmt > 100) {
                hpAmt = 100 - hero.health;
            }

            hero.health += hpAmt;
            console.log(`${name} healed for ${hpAmt} HP!`)
        }
    };
    let count = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < count; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        heroes[name] = {
            health: Number(hp),
            mana: Number(mp)
        };
    }

    while (input[0] !== 'End') {
        let [command, ...args] = input.shift().split(' - ');
        let action = actions[command];
        action(heroes, args);
    }

    Object.entries(heroes).filter(([n, data]) => data.health > 0).sort((a, b) => b[1].health - a[1].health || a[0].localeCompare(b[0])).forEach(hero => {
        console.log(`${hero[0]}`);
        console.log(`  HP: ${hero[1].health}`);
        console.log(`  MP: ${hero[1].mana}`);
    });
    console.log();
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);

console.log(`------------------------`);

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])