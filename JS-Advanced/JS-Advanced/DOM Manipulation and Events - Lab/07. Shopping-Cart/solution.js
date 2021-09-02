function solve() {
   const addProductButtons = document.querySelectorAll('.add-product');
   const checkOutButtonElement = document.querySelector('.checkout');
   const textAreaElement = document.querySelector('textArea');

   let products = new Set();
   let total = 0;

   checkOutButtonElement.addEventListener('click', (e) => {
      textAreaElement.textContent += `You bought ${Array.from(products).join(', ')} for ${total.toFixed(2)}.`;
   })

   for (const addProductButton of addProductButtons) {
      addProductButton.addEventListener('click', (e) => {
         let currentProductElement = e.currentTarget.parentElement.parentElement;
         let productName = currentProductElement.querySelector('.product-title').textContent;
         let productPrice = Number(currentProductElement.querySelector('.product-line-price').textContent);

         products.add(productName);
         total += productPrice;

         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      })
   }
}