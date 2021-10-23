function solve(...params) {
    let steps = Number(params[0]);
    let footpring = Number(params[1]);
    let speed = Number(params[2]);

    let distanceMeters = steps * footpring;
    let speedMeters = speed / 3.6;
    let time = distanceMeters / speedMeters;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHour = Math.floor(time / 3600);

    console.log((timeHour < 10 ? '0' : '') + timeHour + ':' + (timeMin + rest < 10 ? '0' : '') + (timeMin + rest) + ':' + (timeSec < 10 ? '0' : '') + timeSec);
}

solve(4000, 0.60, 5);