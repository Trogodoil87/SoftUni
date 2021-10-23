class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this._ticketsCount = 0;
        this._totalProfit = 0;
    }

    newScreening(date, hall, description) {
        let screen = this.screenings.find((o) => o.date === date && o.hall === hall);
        if (screen === undefined) {
            this.screenings.push({ date: date, hall: hall, description: description });
            return `New screening of ${this.movieName} is added.`;
        } else {
            throw Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
    }

    endScreening(date, hall, soldTickets) {
        let screen = this.screenings.find((o) => o.date === date && o.hall === hall);

        if (screen === undefined) {
            throw Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        } else {
            soldTickets = Number(soldTickets);
            this._ticketsCount += soldTickets;
            let currentProfit = this._ticketsCount * this.ticketPrice;
            this._totalProfit += currentProfit;

            for (let i = 0; i < this.screenings.length; i++) {
                if (this.screenings[i].hall === hall && this.screenings[i].date === date) {
                    this.screenings.splice(i, 1);
                    return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
                }

            }

        }
    }

    toString() {


        let output = [`${this.movieName} full information:`,
        `Total profit: ${this._totalProfit.toFixed(0)}$`,
        `Sold Tickets: ${this._ticketsCount.toFixed(0)}`];

        if (this.screenings.length > 0) {
            let sortedScrrenings = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            output.push("Remaining film screenings:");
            for (const screening of sortedScrrenings) {
                output.push(`${screening.hall} - ${screening.date} - ${screening.description}`);
            }
        } else {
            output.push(`No more screenings!`);
        }
        return output.join('\n');
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');

console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`))
console.log(m.newScreening('October 3, 2020', 'Main', `regular`))
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`))
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150))
console.log(m.endScreening('October 3, 2020', 'Main', 78))

console.log(m.newScreening('October 4, 2020', '235', `regular`));
console.log(m.newScreening('October 5, 2020', 'Main', `regular`));
console.log(m.newScreening('October 3, 2020', '235', `regular`));
console.log(m.newScreening('October 4, 2020', 'Main', `regular`));

console.log(m.toString());

// class Movie {
//     constructor(movieName, ticketPrice) {
//       this.movieName = movieName;
//       this.ticketPrice = Number(ticketPrice);
//       this.screenings = [];
//       this.totalProfit = 0;
//       this.ticketsCount = 0;
//     }
   
//     newScreening(date, hall, description) {
//       let obj = { date: date, hall: hall, desc: description };
//       let screen = this.screenings.find(
//         (o) => o.date === date && o.hall === hall
//       );
//       if (screen === undefined) {
//         this.screenings.push(obj);
//         return `New screening of ${this.movieName} is added.`;
//       } else {
//         throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
//       }
//     }
   
//     endScreening(date, hall, soldTickets) {
//       let screen = this.screenings.find(
//         (o) => o.date === date && o.hall === hall
//       );
//       if (screen === undefined) {
//         throw new Error(
//           `Sorry, there is no such screening for ${this.movieName} movie.`
//         );
//       } else {
//         let currentProfit = Number(soldTickets) * Number(this.ticketPrice);
//         this.totalProfit += currentProfit;
//         this.ticketsCount += Number(soldTickets);
//         let idx = 0;
//         for (let i = 0; i < this.screenings.length; i++) {
//           if (
//             this.screenings[i].date === date &&
//             this.screenings[i].hall === hall
//           ) {
//             idx = i;
//             break;
//           }
//         }
//         this.screenings.splice(idx, 1);
//         return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
//       }
//     }
   
//     toString() {
//       let result = [
//         `${this.movieName} full information:`,
//         `Total profit: ${this.totalProfit.toFixed(0)}$`,
//         `Sold Tickets: ${this.ticketsCount}`,
//       ];
//       if (this.screenings.length > 0) {
//         result.push(`Remaining film screenings:`);
//         let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
//         for (const s of sorted) {
//           result.push(`${s.hall} - ${s.date} - ${s.desc}`);
//         }
//       } else {
//         result.push(`No more screenings!`);
//       }
//       return result.join("\n");
//     }
//   }