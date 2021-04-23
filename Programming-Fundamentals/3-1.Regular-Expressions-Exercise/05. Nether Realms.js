function demonsHealthAndDmg(input) {
    let splitedInput = input.shift().split(',').map((v, i) => v.trim());
    let demons = {};
    let healthPattern = /[^0-9.\/+*-]/g;
    let baseDamagePattern = /[+-]?\d+[.]?\d*/g;
    let finalDamagePattern = /[/|*]/g;

    for (const demon of splitedInput) {
        let health = 0;
        let damage = 0;

        if (demon.match(healthPattern)) {
            for (let letter of demon.match(healthPattern)) {
                health += letter.charCodeAt();
            }
        }

        if (demon.match(baseDamagePattern)) {
            for (let digit of demon.match(baseDamagePattern)) {
                damage += Number(digit);
            }
        }

        if (demon.match(finalDamagePattern)) {
            for (let operand of demon.match(finalDamagePattern)) {
                switch (operand) {
                    case '*':
                        damage *= 2;
                        break;
                    case '/':
                        damage /= 2;
                        break;
                    default:
                        break;
                }
            }
        }

        demons[demon] = {};
        demons[demon]['health'] = health;
        demons[demon]['damage'] = damage;
    }

    let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [demon, props] of sorted) {
        console.log(`${demon} - ${props.health} health, ${props.damage.toFixed(2)} damage`);
    }
}

demonsHealthAndDmg('M3ph-1st0**        Azazel , M3ph-0.5s-0.5t0.0** ');