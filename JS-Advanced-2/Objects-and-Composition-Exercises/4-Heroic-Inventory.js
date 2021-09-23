function heroRegister(params) {
    let output = [];
    for (const param of params) {
        let [name, level, itemsStr] = param.split('/').map((v, i) => i % 2 === 1 ? Number(v) : v.trim());
        let [...items] = itemsStr.split(', ');
        output.push({name, level, items});
    }

    console.log(JSON.stringify(output));
}

heroRegister(['Isacc / 25 /',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']);