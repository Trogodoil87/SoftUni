function solve(input) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let playerXWins = false;
    let playerOWins = false;

    for (let i = 0; i < input.length; i++) {
        let [row, col] = input[i].split(' ');
        row = Number(row);
        col = Number(col);

        let [nextRow, nextCol] = input[i + 1].split(' ');
        nextRow = Number(nextRow);
        nextCol = Number(nextCol);

        if (i % 2 === 0) {
            //X
            isScratched = scratch(dashboard, row, col);
            if (isScratched) {
                console.log("This place is already taken. Please choose another!");
            } else {
                dashboard[row][col] = 'X';
            }
        } else {
            //O
            isScratched = scratch(dashboard, row, col);
            if (isScratched) {
                console.log("This place is already taken. Please choose another!");
            } else {
                dashboard[row][col] = 'O';
            }
        }
        let boardByValues = dashboard.map((el) => el.map((el) => el.toString().charCodeAt()));
        let horizontalSums = boardByValues.map((el) => el.reduce((a, b) => a + b));
        let verticalSums = diagonalSums(boardByValues);
        if (horizontalSums.includes(237) || verticalSums.includes(237)) {
            console.log(`Player O wins!`);
            dashboard.forEach(el => {
                console.log(el.join('\t'));
            })
            return;
        } else if (horizontalSums.includes(264) || verticalSums.includes(264)) {
            console.log(`Player X wins!`);
            dashboard.forEach(el => {
                console.log(el.join(`\t`));
            });
            return;
        }
        //X - 264
        //O - 237
    }

    console.log(`The game ended! Nobody wins :(`);
    dashboard.forEach(el => {
        console.log(el.join(`\t`));
    });

    function diagonalSums(board) {
        let verticalSums = [];
        let sum = 0;
        for (let r = 0; r < board.length; r++) {
            sum += board[r][r];
        }

        verticalSums.push(sum);
        sum = 0;
        for (let r = 0; r < board.length; r++) {
            for (let c = board.length - 1; c >= 0; c--) {
                sum += board[r][c - r];
                break;
            }
        }
        verticalSums.push(sum);

        return verticalSums;
    }
    function scratch(board, row, col) {
        if (board[row][col] === false) {
            return false;
        } else {
            return true;
        }
    }
    console.log();
}
//judge result 20/100
// solve(["0 1",

//     "0 0",

//     "0 2",

//     "2 0",

//     "1 0",

//     "1 1",

//     "1 2",

//     "2 2",

//     "2 1",

//     "0 0"]);
solve(['0 0',
    '0 0',
    '1 1',
    '0 1',
    '1 2',
    '0 2',
    '2 2',
    '1 2',
    '2 2',
    '2 1'])