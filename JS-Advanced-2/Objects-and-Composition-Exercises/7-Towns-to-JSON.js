function toJSON(arr) {
    let storage = [];
    arr.shift();
    for (const prop of arr) {
        let [name, latitude, longitude] = prop.split('|').filter((v, i) => v.length > 0).map((x) => x.trim());
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));

        let currentTown = {
            Town: name,
            Latitude: latitude,
            Longitude: longitude
        }

        storage.push(currentTown);
    }

    console.log(JSON.stringify(storage));
}

toJSON(['| Town | Latitude | Longitude |',

    '| Veliko Turnovo | 43.0757 | 25.6172 |',

    '| Monatevideo | 34.50 | 56.11 |']);