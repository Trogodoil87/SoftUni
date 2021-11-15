function attachEvents() {
    let btnElement = document.querySelector('#submit');
    let locationElement = document.querySelector('#location');
    let forecastElement = document.querySelector('#forecast');


    const symbols = {
        'Sunny': '\u2600',
        'Partly sunny': '\u26C5',
        'Overcast': '\u2601',
        'Rain': '\u2614',
        'Degrees': '\xB0'
    }

    let allLocations = [];

    btnElement.addEventListener('click', (e) => {
        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(res => res.json())
            .then((data) => {
                for (const key in data) {
                    allLocations.push(data[key]);
                }

                let location = allLocations.find((o) => o.name === locationElement.value);

                forecastElement.style.display = 'block';

                return location;
            })
            .then((location) => {
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
                    .then(res => res.json())
                    .then((data) => {
                        let forecasts = createForecasts(data, symbols);

                        let currentConditionElement = document.querySelector('#current');
                        removeAllChildNodes(currentConditionElement);
                        currentConditionElement.appendChild(forecasts);
                    })
                    .catch((error) => {
                        throw 'Invalid input';
                    });
                return location;
            })
            .then((location) => {
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`)
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                        let forecastsInfo = createThreeDayForecasts(data, symbols);

                        let upcomingWeatherElement = document.querySelector('#upcoming');
                        removeAllChildNodes(upcomingWeatherElement);
                        upcomingWeatherElement.appendChild(forecastsInfo);
                    })
                    .catch(() => {
                        throw `Error`;
                    })
            })
            .catch(() => {
                forecastElement.textContent = 'Error';
            });

    });



    function createThreeDayForecasts(forecasts, symbols) {
        let div = document.createElement('div');
        div.classList.add('forecast-info');

        for (let i = 0; i < 3; i++) {
            let span = createSpan(['upcoming']);
            span.appendChild(createSpan(['symbol'], symbols[forecasts.forecast[i].condition]));
            span.appendChild(createSpan(['forecast-data'], `${forecasts.forecast[i].low}/${forecasts.forecast[i].high}`));
            span.appendChild(createSpan(['forecast-data'], forecasts.forecast[i].condition));
            div.appendChild(span);
        }

        return div;
    }

    function createSpan(classNames, content) {
        let span = document.createElement('span');
        for (const className of classNames) {
            span.classList.add(className);
        }
        if (content) {
            span.textContent = content;
        }

        return span;
    }

    function createForecasts(forecasts, symbols) {
        let div = document.createElement('div');
        div.classList.add('forecasts');
        div.appendChild(createSpan(['condtion', 'symbol'], symbols[forecasts.forecast.condition]));

        let spanCondtionElement = createSpan(['condition']);

        spanCondtionElement.appendChild(createSpan(['forecast-data'], forecasts.name))
        spanCondtionElement.appendChild(createSpan(['forecast-data'], `${forecasts.forecast.low}/${forecasts.forecast.high}`))
        spanCondtionElement.appendChild(createSpan(['forecast-data'], forecasts.forecast.condition));

        div.appendChild(spanCondtionElement);
        return div;
    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

attachEvents();