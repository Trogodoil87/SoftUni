function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (e) => {
        let power = e.offsetX / (e.target.clientWidth - 1);
        let precentage = Math.trunc(power * 100);
        resultElement.textContent = precentage + '%';
    })
    gradientElement.addEventListener('mouseout', function() {
        resultElement.textContent = '';
    })
}