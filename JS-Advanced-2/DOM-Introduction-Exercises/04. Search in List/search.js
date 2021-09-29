function search() {
   let allLiElements = document.querySelectorAll('li');
   let searchElement = document.querySelector('#searchText');

   let townLiElements = Array.from(allLiElements);

   let counter = 0;


   for (const townLiElement of townLiElements) {
      townLiElement.style.fontWeight = 'normal';
      townLiElement.style.textDecoration = 'none';
         if (townLiElement.textContent.includes(searchElement.value)) {
         
            townLiElement.style.fontWeight = 'bold';
            townLiElement.style.textDecoration = 'underline';
      
            counter++;
         }
   }

   let resultElement = document.querySelector('#result');
   resultElement.textContent = `${counter} matches found`;
}
