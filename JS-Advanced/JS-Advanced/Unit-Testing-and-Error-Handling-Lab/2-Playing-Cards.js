function validateCards(face, suit) {

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if (faces.includes(face) == false) {
        throw new Error('Error');
    } else if (!suits.hasOwnProperty(suit)) {
        throw new Error('Error');
    } else {
        return face + suits[suit].toString();
    }
}

console.log(validateCards('1', 'C'));