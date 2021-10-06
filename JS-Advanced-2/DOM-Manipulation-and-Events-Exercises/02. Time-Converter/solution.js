function attachEventsListeners() {

    let allConvertButtonElements = document.querySelectorAll('input[type]:nth-of-type(2)');
    let daysValueElement = document.querySelector('#days');
    let hourssValueElement = document.querySelector('#hours');
    let minutesValueElement = document.querySelector('#minutes');
    let secondsValueElement = document.querySelector('#seconds');

    for (const convertButtonElement of allConvertButtonElements) {
        convertButtonElement.addEventListener('click', (e) => {
            let currentValue = Number(e.currentTarget.parentNode.children[1].value);
            let currentName = e.currentTarget.parentNode.children[0].textContent.split('').filter((v) => v !== ':').join('').trim();
            console.log(typeof currentValue);

            let days;
            let hours;
            let minutes;
            let seconds;

            switch (currentName) {
                case 'Days':
                    hours = 24 * currentValue;
                    minutes = hours * 60;
                    seconds = minutes * 60;

                    hourssValueElement.value = hours;
                    minutesValueElement.value = minutes;
                    secondsValueElement.value = seconds;
                    break;
                case 'Hours':
                    days = currentValue / 24;
                    minutes = currentValue * 60;
                    seconds = minutes * 60;

                    daysValueElement.value = days;
                    minutesValueElement.value = minutes;
                    secondsValueElement.value = seconds;
                    break;
                case 'Minutes':
                    hours = currentValue / 60;
                    days = hours / 24;
                    seconds = currentValue * 60;

                    hourssValueElement.value = hours;
                    daysValueElement.value = days;
                    secondsValueElement.value = seconds;
                    break;
                case 'Seconds':
                    minutes = currentValue / 60;
                    hours = minutes / 60;
                    days = hours / 24;

                    minutesValueElement.value = minutes;
                    hourssValueElement.value = hours;
                    daysValueElement.value = days;
                    break;
                default:
                    break;
            }
        })
    }
}