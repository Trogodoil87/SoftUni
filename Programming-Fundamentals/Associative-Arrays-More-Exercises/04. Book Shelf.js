function solve(input) {
    let storage = {};

    while (input.length > 0) {
        let line = input.shift();
        let shelfPattern = /[0-9]/g;
        let matchShelf = line.match(shelfPattern);

        if (matchShelf) {
            let [id, genre] = line.split(' -> ');
            id = Number(id);
            if (!storage.hasOwnProperty(id)) {
                storage[id] = {
                    shelfGenre: genre,
                };
            }
        } else {
            let [book, ...args] = line.split(': ');
            let [author, genre] = args.shift().split(', ');
            let obj = {};
            obj[book] = author;
            Object.entries(storage).forEach(ele => {
                if (ele[1].shelfGenre === genre) {
                    ele[1][book] = author;
                }
            })
        }
    }

    Object.entries(storage)
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
        .sort((a, b) => Object.entries(a[1]) - Object.entries([1])).forEach(ele => {
            let genre = ele[1].shelfGenre;
            delete ele[1].shelfGenre;
            console.log(`${ele[0]} ${genre}: ${Object.keys(ele[1]).length}`);
            Object.entries(ele[1]).sort((a, b) => a[0].localeCompare(b[0])).forEach(e => {
                console.log(`--> ${e[0]}: ${e[1]}`);
            });
        });
}

solve(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);