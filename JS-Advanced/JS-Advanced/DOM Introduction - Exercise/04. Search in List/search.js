function search() {
   let allLiElements = document.querySelectorAll('#towns li');
   let searchWordElement = document.querySelector('#searchText');

   let countMatches = 0;   

   let searchWord = searchWordElement.value;

   for (const liElement of allLiElements) {
      if (liElement.textContent.includes(searchWord)) {
         liElement.style['text-decoration'] = 'underline';
         liElement.style['font-weight'] = 'bold';
         countMatches++;
      }
   }

   let resultElement = document.querySelector('#result');
   resultElement.textContent = `${countMatches} matches found`;
}
