function cityTaxes(name, population, treasury) {
    class City {
        constructor(name, population, treasury) {
            this.name = name;
            this.population = population;
            this.treasury = treasury;
            this.taxRate = 10;
            this.collectTaxes = function () {
                this.treasury += this.taxRate * population;
            }
            this.applyGrowth = function (precentage) {
                this.population += this.population * (precentage / 100);
            }
            this.applyRecession = function (precentage) {
                this.treasury -= this.treasury * (precentage / 100);
            }
        }
    }
    let city = new City(name, population, treasury);
    return city;
}
const city =

    cityTaxes('Tortuga',

        7000,

        15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);