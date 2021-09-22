function daysOfWeek(dayOfWeek) {
    let output = 0;

    let days = {
        Monday: () => {
            output = 1;
        },
        Tuesday: () => {
            output = 2;
        },
        Wednesday: () => {
            output = 3;
        },
        Thursday: () => {
            output = 4;
        },
        Friday: () => {
            output = 5;
        },
        Saturday: () => {
            output = 6;
        },
        Sunday: () => {
            output = 7;
        }
    }

    let day = days[dayOfWeek];

    if (day == 'undefined') {
        console.log('error');
    } else {
        day();
        console.log(output);
    }
}

daysOfWeek('Monday');