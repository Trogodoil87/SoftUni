function dayOfWeek(input) {
    let result;

    let days = {
        Monday: () => {
            result = '1';
        },
        Tuesday: () => {
            result = '2';
        },
        Wednesday: () => {
            result = '3';
        },
        Thursday: () => {
            result = '4';
        },
        Friday: () => {
            result = '5';
        },
        Saturday: () => {
            result = '6';
        },
        Sunday: () => {
            result = '7';
        }
    };
    let action = days[input];

    if (action !== undefined) {
        action();
        console.log(result);
    } else {
        console.log(`error`);
    }
}

dayOfWeek(`Monday`);