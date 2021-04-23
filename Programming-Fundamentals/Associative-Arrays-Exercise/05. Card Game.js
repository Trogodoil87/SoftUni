function game(input) {
    let players = {};

    for (let line of input) {
        let [player, cards] = line.split(': ');
        cards = cards.split(', ');

        if (!players.hasOwnProperty(player)) {
            players[player] = new Set();
        }
        let existing = players[player];
        for (let card of cards) {
            existing.add(card);
        }
        console.log();
    }
    let output = {};
    
    for (let deck of Object.entries(players)) {
        let power = gameCards(deck[1]).reduce((a, b) => a + b, 0);
        
        if (!output.hasOwnProperty(deck[0])) {
            output[deck[0]] = power;
        }
        
    }
    

    for (let kvp of Object.entries(output)) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }

    function gameCards(arr) {
        let result = [];
        let cards = Array.from(arr);

        for (let i = 0; i < cards.length; i++) {
            let cardA = cards[i][0];
            let cardB = cards[i][1];

            for (let c = 0; c < cards[i].length; c++) {
                let currentChar = cards[i][c];
                let nextChar = cards[i][c + 1];

                let isNumA = Number(currentChar);
                let isNumB = Number(nextChar);

                if (isNumA > Number.MIN_SAFE_INTEGER && isNumB > Number.MIN_SAFE_INTEGER) {
                    cardA = currentChar + nextChar;
                    if (c === 0) {
                        cardB = cards[i][c + 2];
                    } else if (c > 0) {
                        cardB = cards[i][c - 1];
                    }
                }
            }
       

            let powerA = powers(cardA);
            let powerB = powers(cardB);


            result.push(powerA * powerB);
        }

        return result;
        function powers(card) {
            let result = 0;

            switch (card) {
                case '2':
                    result = 2;
                    break;
                case '3':
                    result = 3;
                    break;
                case '4':
                    result = 4;
                    break;
                case '5':
                    result = 5;
                    break;
                case '6':
                    result = 6;
                    break;
                case '7':
                    result = 7;
                    break;
                case '8':
                    result = 8;
                    break;
                case '9':
                    result = 9;
                    break;
                case '10':
                    result = 10;
                    break;
                case 'J':
                    result = 11;
                    break;
                case 'Q':
                    result = 12;
                    break;
                case 'K':
                    result = 13;
                    break;
                case 'A':
                    result = 14;
                    break;
                case 'S':
                    result = 4;
                    break;
                case 'H':
                    result = 3;
                    break;
                case 'D':
                    result = 2;
                    break;
                case 'C':
                    result = 1;
                    break;
                default:
                    break;
            }

            return result;
        }
    }
}

game([

    // 'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    // 'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    // 'Andrea: QH, QC, JS, JD, JC',

    // 'Peter: JD, JD, JD, JD, JD, JD'

]);