function solve(numbers) {
    numbers = numbers.map(Number);
    let questions = numbers.pop();
    let answeredPerHour = numbers.reduce((acc, el) => acc + el, 0);
    let time = 0;
    let brakes = 0;
    let totalAnswered = 0;

    while (true) {
        totalAnswered += answeredPerHour;
        time++
        if (totalAnswered >= questions) {
            break;
        }
        if (time % 3 === 0) {
            brakes++;
        }
    }
    console.log(questions > 0 ? `Time needed: ${time + brakes}h.` : `Time needed: 0h.`);
}

solve(['1',
    '2',
    '3',
    '0']);