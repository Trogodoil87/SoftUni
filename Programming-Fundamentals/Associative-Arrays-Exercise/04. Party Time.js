function guestsList(input) {
    let vipGuests = [];
    let regularGuests = [];

    while (true) {
        let guest = input.shift();

        if (guest === 'PARTY') {
            break;
        }
        if (Number(guest[0])) {
            vipGuests.push(guest);
        } else {
            regularGuests.push(guest);
        }
    }

    for (let guest of input) {
        let indexVip = vipGuests.indexOf(guest);
        let indexReg = regularGuests.indexOf(guest);

        if (indexVip >= 0) {
            vipGuests.splice(indexVip, 1);
        }
        if (indexReg >= 0) {
            regularGuests.splice(indexReg, 1);
        }
    }
    // for (let guest of input) {
    //     if (vipGuests.hasOwnProperty(guest)) {
    //         delete vipGuests[guest];
    //     }
    //     if (regularGuests.hasOwnProperty(guest)) {
    //         delete regularGuests[guest];
    //     }
    // }

    let length = vipGuests.length + regularGuests.length;
    console.log(length);

    for (let guest of vipGuests) {
        console.log(guest);
    }
    for (let guest of regularGuests) {
        console.log(guest);
    }
}

guestsList([

    '9NoBUajQ',
    '7IK9Yo0h',
    '9NoBUajQ',

    'Ce8vwPmE',

    'SVQXQCbc',

    'tSzE5t0p',

    'PARTY',

    '9NoBUajQ',

    'Ce8vwPmE',

    'SVQXQCbc'

]);