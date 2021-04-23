function schoolGrades(input) {
    let students = {};

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!students.hasOwnProperty(name)) {
            students[name] = [];
        }

        let existing = students[name];

        for (let grade of grades) {
            existing.push(grade);
        }
    }
    
    let sorted = Object.entries(students).sort(averageNum);

    function averageNum([personA, arrA], [personB, arrB]) {
        let avrA = arrA.reduce((a, b) => a + b, 0) / arrA.length;
        let avrB = arrB.reduce((a, b) => a + b, 0) / arrB.length;

        return avrA - avrB;
    }

    for (let student of sorted) {
        console.log(`${student[0]}: ${student[1].join(', ')}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6']);