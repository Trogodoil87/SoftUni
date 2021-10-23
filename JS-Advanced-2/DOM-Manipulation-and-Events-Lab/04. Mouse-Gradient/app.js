function attachGradientEvents() {
    let gradientBarElement = document.querySelector('#gradient');
    let resultElement = document.querySelector('#result');

    gradientBarElement.addEventListener('mousemove', gradientMove);
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        resultElement.textContent = `${power}%`;
    }
}