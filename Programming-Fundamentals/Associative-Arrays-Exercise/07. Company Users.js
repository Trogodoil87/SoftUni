function idTracker(input) {
    let companys = {};

    for (let line of input) {
        let [company, id] = line.split(' -> ');
        
        if (!companys.hasOwnProperty(company)) {
            companys[company] = new Set();
        }

        companys[company].add(id);
    }

    let ascendingOrderedNames = Object.entries(companys).sort((a, b) => a[0].localeCompare(b));

    for (let line of ascendingOrderedNames) {

        console.log(line[0]);
        for (let id of line[1]) {

            console.log(`-- ${id}`);
        }
    }
}

idTracker([

    'SoftUni -> AA12345',

    'SoftUni -> BB12345',

    'Microsoft -> CC12345',

    'HP -> BB12345'

]);