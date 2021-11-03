function getInfo() {
    let busIdField = document.querySelector('#stopId');
    let stopNameElement = document.querySelector('#stopName');

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busIdField.value}`)
        .then(res => res.json())
        .then((data) => {
            busIdField.value = '';

            stopNameElement.textContent = data.name;

            let busesUlElement = document.querySelector('#buses');

            for (const key in data.buses) {
                if (Object.hasOwnProperty.call(data.buses, key)) {
                    let li = document.createElement('li');
                    li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
                    busesUlElement.appendChild(li);
                }
            }
        })
        .catch((error) => {
            busIdField.value = '';
            stopNameElement.textContent = 'Error';
        });
}