function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let searchWord = document.querySelector('#searchField');

      let allTdElements = document.querySelectorAll('tbody tr');

      for (const tdElement of allTdElements) {
         tdElement.className = '';
      }

      for (const tdElement of allTdElements) {
         if (tdElement.textContent.includes(searchWord.value)) {
            tdElement.className = 'select';
         }
      }

      searchWord.value = '';
   }
}