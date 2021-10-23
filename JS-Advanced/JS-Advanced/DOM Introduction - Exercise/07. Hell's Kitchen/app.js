function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let rsElements = document.querySelector('#inputs textarea');
      let rsProps = JSON.parse(rsElements.value);
      let restaurants = {};

      for (const prop of rsProps) {
         let [restaurantName, empAsString] = prop.split(' - ');

         let inputWorkers = empAsString.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return { name, salary: Number(salary) };
         })
         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {
               restaurantName: restaurantName,
               workers: [],
               getAverageSalary: function() { return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length }
            }
         }
         restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers);

      }

      let bestRestaurant = Object.values(restaurants).sort((a, b) => b.getAverageSalary() - a.getAverageSalary());
      
      let workersBest = bestRestaurant[0].workers.sort((a, b) => b.salary - a.salary);

      console.log(bestRestaurant.restaurantName);
      let restaurantOutputElement = document.querySelector('#bestRestaurant p');
      restaurantOutputElement.innerHTML = `Name: ${bestRestaurant.restaurantName} Average Salary: ${bestRestaurant[0].getAverageSalary().toFixed(2)}`;
   }

}
