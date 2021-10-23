function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchWord = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('tbody tr'));

      rowElements.forEach(el => {
         el.className = '';
      })

      rowElements.forEach(el => {
         let values = Array.from(el.children);
         if (values.some(x=>x.textContent.includes(searchWord.value))) {
            el.className = 'select';
         }
      })

      searchWord.value = '';
   }
}