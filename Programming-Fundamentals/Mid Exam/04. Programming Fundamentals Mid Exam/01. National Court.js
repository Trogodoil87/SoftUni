function solve(numbers) {
    let time = 0;
    let queue = Number(numbers.pop());
    let totalAnsweredPerHour = numbers.map(Number).reduce((acc, n) => acc + n, 0);
    let total = 0;
    let brakes = 0;

    while (total <= queue) {
        total += totalAnsweredPerHour;
        if (time % 3 === 0) {
            brakes++;
        }
        if (total >= queue) {
            break;
        }
        time++;
    }

    console.log(queue > 0 ? `Time needed: ${time + brakes}h.` : `Time needed: 0h.`);
}

solve(['1', '1', '1', '3']);