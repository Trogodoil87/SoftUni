function carCrate(moves) {
    function printBoard(board) {
        for (const line of board) {
            console.log(line.join('\t'));
        }
    }
    function horizontalSums(arrs) {
        let result = [];
        for (const arr of arrs) {
            let currentSum = arr.reduce((a, v) => a + v, 0);
            result.push(currentSum);
        }

        return result;
    }
    function verticalSums(arrs) {
        let result = []
        for (let r = 0; r < arrs.length; r++) {
            let currentSum = 0;
            for (let c = 0; c < arrs[r].length; c++) {
                currentSum += arrs[0 + c][r];
            }
            result.push(currentSum);
        }

        return result;
    }
    function diagonalSums(arrs) {
        let result = [];

        let sum = 0;
        for (let i = 0; i < arrs.length; i++) {
            sum += arrs[i][i];
        }

        result.push(sum);
        sum = 0;

        for (let r = 0; r < arrs.length; r++) {
            sum += arrs[r][arrs.length - 1 - r];
        }

        result.push(sum);

        return result;
    }
    let board = [['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false']];

    let boardChecks = [[-1, -1, -1,],
    [-1, -1, -1],
    [-1, -1, -1]];
    let movesCounter = 0;

    for (let i = 0; i < moves.length; i++) {
        let [row, col] = moves[i].split(' ').map((v, i) => Number(v));

        let verticalSumsArr = verticalSums(boardChecks);
        let horizontalSumsArr = horizontalSums(boardChecks);
        let diagonalSumsArr = diagonalSums(boardChecks);

        if (verticalSumsArr.includes(30) || horizontalSumsArr.includes(30) || diagonalSumsArr.includes(30)) {
            console.log(`Player X wins!`);
            printBoard(board);
            return;
        } else if (verticalSumsArr.includes(60) || horizontalSumsArr.includes(60) || diagonalSumsArr.includes(60)) {
            console.log(`Player O wins!`);
            printBoard(board);
            return;
        }
        if (movesCounter % 2 === 0) {
            //x player turn
            if (board[row][col] === 'false') {
                board[row][col] = 'X';
                boardChecks[row][col] = 10;
            } else {
                console.log("This place is already taken. Please choose another!");
                movesCounter--;
            }

            console.log()
        } else if (movesCounter % 2 === 1) {
            // o player turn
            if (board[row][col] === 'false') {
                board[row][col] = 'O';
                boardChecks[row][col] = 20;
            } else {
                console.log("This place is already taken. Please choose another!");
                movesCounter--;
            }

        }




        movesCounter++;
    }
    console.log('The game ended! Nobody wins :(');
    printBoard(board);
}


carCrate(["0 0",

    "0 0",

    "1 1",

    "0 1",

    "1 2",

    "0 2",

    "2 2",

    "1 2",

    "2 2",

    "2 1"]);