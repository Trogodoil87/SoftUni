function create(words) {
   let contentElement = document.querySelector('#content');

   for (const word of words) {
      let currentDivElement = document.createElement('div');
      let currentPElement = document.createElement('p');

      currentPElement.textContent = word;
      currentPElement.style.display = 'none'

      currentDivElement.appendChild(currentPElement);
      currentDivElement.addEventListener('click', reveal.bind(currentPElement))

      contentElement.appendChild(currentDivElement);
   }

   function reveal() {
      this.style.display = '';
   }
}