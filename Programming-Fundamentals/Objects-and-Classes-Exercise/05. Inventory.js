function heroInventory(stringsArr) {

    let heros = [];

    for (let i = 0; i < stringsArr.length; i++) {
        let [name, level, agrs] = stringsArr[i].split(' / ');
        let items = agrs.split(', ').sort((a, b) => a.localeCompare(b));

        let hero = {
            name,
            level: Number(level),
            items: items
        };

        heros.push(hero);
    }
    // sorting levels
    let sortedOutput = heros.sort((a, b) => (a.level > b.level) ? 1 : -1);

    for (let obj of sortedOutput) {
        console.log(`Hero: ${obj.name}\nlevel => ${obj.level}\nitems => ${obj.items.join(', ')}`);
    }
}

heroInventory([

    "Isacc / 25 / GravityGun, Apple, GravityGun",

    "Derek / 12 / BarrelVest, DestructionSword",

    "Hes / 1 / Desolator, Sentinel, Antara"

]);