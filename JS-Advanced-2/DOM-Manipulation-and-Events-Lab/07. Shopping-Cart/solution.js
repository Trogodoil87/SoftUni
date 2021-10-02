function solve() {
   let allAddButtonElements = document.querySelectorAll('.add-product');
   let checkoutButtonElement = document.querySelector('.checkout');
   let textAreaElement = document.querySelector('textarea');
   
   let products = new Set();
   let totalCost = 0;

   for (const addButton of allAddButtonElements) {
      addButton.addEventListener('click', (e) => {
         let currentProduct = e.currentTarget.parentNode.parentNode.children[1].children[0].textContent;
         let currentPrice = Number(e.currentTarget.parentNode.parentNode.children[3].textContent);
         console.log(e.currentTarget.parentElement.parentElement.parentElement)

         products.add(currentProduct);
         totalCost += currentPrice;

         textAreaElement.textContent += `Added ${currentProduct} for ${currentPrice.toFixed(2)} to the cart.\n`
      });
   
   }

   checkoutButtonElement.addEventListener('click', (e) => {

      textAreaElement.textContent += `You bought ${[...products].join(', ')} for ${totalCost.toFixed(2)}.`

      e.target.disabled = 'true';
      for (const addButton of allAddButtonElements) {
         addButton.disabled = 'true';
      }
   })
}