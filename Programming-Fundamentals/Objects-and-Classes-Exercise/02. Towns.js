function townMesurments(inputArr) {
    let towns = [];
    for (let townProps of inputArr) {
        let [town, latitude, longitude] = townProps.split(' | ');
        let currentTown = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };

        towns.push(currentTown);
    }

    for (const townProps of towns) {
        console.log(townProps);
    }
}

townMesurments(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625']);