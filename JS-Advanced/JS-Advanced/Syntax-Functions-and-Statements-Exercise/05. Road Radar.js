function speedRadar(kmH, type) {
    let types = {
        city: (kmH) => {
            let difference = kmH - 50;
            let status = speedDifferenceValidate(difference);

            if (status !== -1) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
            } else {
                console.log(`Driving ${kmH} km/h in a 50 zone`);
            }
        },
        residential: (kmH) => {
            let difference = kmH - 20;
            let status = speedDifferenceValidate(difference);

            if (status !== -1) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
            } else {
                console.log(`Driving ${kmH} km/h in a 20 zone`);
            }
        },
        interstate: (kmH) => {
            let difference = kmH - 90;
            let status = speedDifferenceValidate(difference);

            if (status !== -1) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
            } else {
                console.log(`Driving ${kmH} km/h in a 90 zone`);
            }
        },
        motorway: (kmH) => {
            let difference = kmH - 130;
            let status = speedDifferenceValidate(difference);

            if (status !== -1) {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
            } else {
                console.log(`Driving ${kmH} km/h in a 130 zone`);
            }
        }
    };

    let action = types[type];
    kmH = Number(kmH);
    action(kmH);

    function speedDifferenceValidate(difference) {
        let result;
        if (difference > 0 && difference <= 20) {
            result = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            result = 'excessive speeding';

        } else if (difference > 40) {
            result = 'reckless driving';

        } else {
            result = -1;

        }

        return result;
    }
}

speedRadar(221, 'motorway');