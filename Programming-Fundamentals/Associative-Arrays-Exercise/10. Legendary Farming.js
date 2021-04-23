function solve(input) {

    let legendaryMats = {
        'shards': 0,
        'motes': 0,
        'fragments': 0
    };

    let junk = {};
    let obtainedLegendary = false;
    let legendItem = '';

    let materials = input.split(' ');
    for (let i = 0; i < materials.length; i += 2) {
        let qunatity = Number(materials[i]);
        let currentMat = materials[i + 1].toLowerCase();


        if (currentMat === 'motes' || currentMat === 'fragments' || currentMat === 'shards') {
            legendaryMats[currentMat] += qunatity;

            if (legendaryMats[currentMat] >= 250 && currentMat === 'shards') {
                legendItem = 'Shadowmourne';
                legendaryMats[currentMat] -= 250;
                break;

            } else if (legendaryMats[currentMat] >= 250 && currentMat === 'fragments') {
                legendItem = 'Valanyr';
                legendaryMats[currentMat] -= 250;
                break;

            } else if (legendaryMats[currentMat] >= 250 && currentMat === 'motes') {
                legendItem = 'Dragonwrath';
                legendaryMats[currentMat] -= 250;
                break;
            }

            if (obtainedLegendary) {
                break;
            }

        } else {
            if (!junk.hasOwnProperty(currentMat)) {
                junk[currentMat] = 0;
            }
            junk[currentMat] += qunatity;
        }
    }

    console.log(`${legendItem} obtained!`);

    Object.entries(legendaryMats).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(ele => {
        console.log(`${ele[0]}: ${ele[1]}`);
    });
    Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0])).forEach(ele => {
        console.log(`${ele[0]}: ${ele[1]}`);
    })
}

// solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
solve('1 silver 1 silver 250 motes');