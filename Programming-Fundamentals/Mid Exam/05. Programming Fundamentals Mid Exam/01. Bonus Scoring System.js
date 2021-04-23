function solve(args) {
    let input = args.slice();

    let intitialAttendaces = Number(input.shift());

    let intitialLectures = Number(input.shift());
    let intitialBonus = Number(input.shift());
    let sorted = input.filter((v, i) => i < intitialAttendaces)
        .map(Number)
        .sort((a, b) => b - a);
    let totalBonus = sorted[0] / intitialLectures * (5 + intitialBonus);
    if (intitialAttendaces === 0) {
        console.log(`Max Bonus: 0.`)
        console.log(`The student has attended 0 lectures.`);
    } else {
        console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`)
        console.log(`The student has attended ${sorted[0]} lectures.`);
    }
}

solve([

    '0', '25', '30',

    '12', '19', '24',

    '16', '20'

]);