function attachEventsListeners() {

    let dConvertButtonElement = document.getElementById('daysBtn');
    let textAreaDaysElement = document.getElementById('days');
    textAreaDaysElement.value = '';

    let hConvertButtonElement = document.getElementById('hoursBtn');
    let textAreaHoursElement = document.getElementById('hours');

    let mConvertButtonElement = document.getElementById('minutesBtn');
    let textAreaMinutesElement = document.getElementById('minutes');

    let sConvertButtonElement = document.getElementById('secondsBtn');
    let textAreaSecondsElement = document.getElementById('seconds');




    dConvertButtonElement.addEventListener('click', (e) => {
        textAreaHoursElement.value = Number(textAreaDaysElement.value) * 24;
        textAreaMinutesElement.value = textAreaHoursElement.value * 60;
        textAreaSecondsElement.value = textAreaMinutesElement.value * 60;
    });
    hConvertButtonElement.addEventListener('click', (e) => {
        textAreaDaysElement.value = Number(textAreaHoursElement.value) / 24;
        textAreaMinutesElement.value = Number(textAreaHoursElement.value) * 60;
        textAreaSecondsElement.value = textAreaMinutesElement.value * 60;
    });
    mConvertButtonElement.addEventListener('click', (e) => {
        textAreaHoursElement.value = Number(textAreaMinutesElement.value) / 60;
        textAreaDaysElement.value = textAreaHoursElement.value / 24;
        textAreaSecondsElement.value = Number(textAreaMinutesElement.value) * 60;
    })
    sConvertButtonElement.addEventListener('click', (e) => {
        textAreaMinutesElement.value = Number(textAreaSecondsElement.value) / 60
        textAreaHoursElement.value = textAreaMinutesElement.value / 60;
        textAreaDaysElement.value = textAreaHoursElement.value / 24;
    })

}