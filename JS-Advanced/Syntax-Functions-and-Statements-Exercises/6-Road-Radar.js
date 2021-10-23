function solve(speed, area) {
    let status;
    let kmHDifference;
    let zone;

    let types = {
        city: (speed) => {
            kmHDifference = speed - 50;
            status = speedStatus(kmHDifference);
            zone = 50;
        },
        residential: (speed) => {
            kmHDifference = speed - 20;
            status = speedStatus(kmHDifference);
            zone = 20;
        },
        interstate: (speed) => {
            kmHDifference = speed - 90;
            status = speedStatus(kmHDifference);
            zone = 90;
        },
        motorway: (speed) => {
            kmHDifference = speed - 130;
            status = speedStatus(kmHDifference);
            zone = 130;
        }

    }

    function speedStatus(kmHDifference) {
        let status = -1;

        if (kmHDifference > 0 && kmHDifference <= 20) {
            status = 'speeding';
        } else if (kmHDifference > 20 && kmHDifference <= 40) {
            status = 'excessive speeding';
        } else if (kmHDifference > 40) {
            status = 'reckless driving';
        }

        return status;
    }

    let typeArea = types[area];
    typeArea(speed);
    if (status === -1) {
        console.log(`Driving ${speed} km/h in a ${zone} zone`);
    } else {
        console.log(`The speed is ${Math.abs(kmHDifference)} km/h faster than the allowed speed of ${zone} - ${status}`)
    }
}

solve(120, 'interstate');