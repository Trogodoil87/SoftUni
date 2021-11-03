function solve() {
    let allStops = [];
    let spanElement = document.querySelector('.info');
    let departBtnElement = document.querySelector('#depart');
    let arriveBtnElement = document.querySelector('#arrive');
    let nextStop;


    fetch(`http://localhost:3030/jsonstore/bus/schedule/`)
        .then(res => res.json())
        .then((data) => {
            for (const key in data) {
                allStops.push(data[key]);
            }
        })

    function depart() {

        if (allStops.length === 0) {
            spanElement.textContent = `Error`;

            departBtnElement.disabled = true;
            arriveBtnElement.disabled = true;

            return;
        }
        nextStop = allStops.pop();
        spanElement.textContent = `Next Stop ${nextStop.name}`;

        departBtnElement.disabled = true;
        arriveBtnElement.disabled = false;

    }

    function arrive() {
        departBtnElement.disabled = false;
        arriveBtnElement.disabled = true;
        spanElement.textContent = `Arriving at ${nextStop.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();