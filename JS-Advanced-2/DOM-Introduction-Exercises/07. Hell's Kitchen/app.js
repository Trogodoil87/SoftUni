function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      let textAreaElement = document.querySelector('textarea');
      let restaurantsProp = JSON.parse(textAreaElement.value);

      let restaurants = {};

      for (const currentRestaurantProp of restaurantsProp) {
         let [restaurantName, employesStr] = currentRestaurantProp.split('-').map((x) => x.trim());
         let workers = employesStr.split(', ').map((x) => {
            let [name, salary] = x.split(' ');
            return { name, salary: Number(salary) };
         });

         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {
               restaurantName: restaurantName,
               workers: [],
               getAverageSalary: function () { return this.workers.reduce((a, el) => a + el.salary, 0) / this.workers.length }
            }
         }
         restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(workers);
      }

      let bestRestaurant = Object.values(restaurants).sort((a, b) => b.getAverageSalary() - a.getAverageSalary());
      let bestWorkers = bestRestaurant[0].workers.sort((a, b) => b.salary - a.salary);

      let bestRestaurantTextAreaElement = document.querySelector('#bestRestaurant p');
      bestRestaurantTextAreaElement.textContent = `Name: ${bestRestaurant[0].restaurantName} Average Salary: ${bestRestaurant[0].getAverageSalary().toFixed(2)} Best Salary: ${bestWorkers[0].salary}`;

      let bestRestaurantWorkersTextAreaElement = document.querySelector('#workers p');
      console.log(bestWorkers)
      for (const obj of bestWorkers) {
         bestRestaurantWorkersTextAreaElement.textContent += `Name: ${obj.name} With Salary: ${obj.salary} `;
      }
   }
}