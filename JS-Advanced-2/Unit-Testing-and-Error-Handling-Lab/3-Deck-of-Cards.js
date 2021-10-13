function printDeckOfCards(cards) {

    function createCard(face, suit) {

        // Use the solution from the previous task  
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if (faces.includes(face) == false || suits.hasOwnProperty(suit) == false) {
            return `Invalid card: ${face + suit}`
        } else {
            return face + suits[suit].toString();
        }
    }

    let sequence = [];

    for (const card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);

        let result = createCard(face, suit);

        if (result.includes('Invalid')) {
            console.log(`Invalid card: ${card}`);
            return;
        }

        sequence.push(result);
    }

    console.log(sequence.join(' '));
}

printDeckOfCards(['3H', '10D', 'KH', '2C']);