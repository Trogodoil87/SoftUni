function register(input) {
    let parkingLot = {};

    for (let line of input) {
        let [command, order] = line.split(', ');
        if (command === 'IN') {
            if (!parkingLot.hasOwnProperty(order)) {
                parkingLot[order] = 1;
            }
        } else if (command === `OUT`) {
            delete parkingLot[order];
        }
    }
    let sorted = Object.entries(parkingLot).sort((a, b) => a[0].localeCompare(b[0]));

    if (sorted.length > 0) {

        for (let arr of sorted) {
            console.log(arr[0]);
        }
    } else {
        console.log(`Parking Lot is Empty`);
    }


}
register(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU']);

register(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'OUT, CA1234TA']);