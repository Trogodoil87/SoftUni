class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { 'child': 150, 'student': 300, 'collegian': 500 };
        this.listOfParticipants = [];
        this._find = (search, condition) => {
            return this.listOfParticipants.find((o) => o[condition] === search);
        }
        this._isValid = (type, value) => {
            let res;
            if (typeof value !== type) {
                res = false;
            } else {
                res = true;
            }

            return res;
        }
    }

    registerParticipant(name, condition, money) {
        money = Number(money);
        let isValidName = this._isValid('string', name);
        let isValidCondition = this._isValid('string', condition);

        let isinCamp = this._find(name, 'name');

        if (!this.priceForTheCamp.hasOwnProperty(condition) || !isValidName || !isValidCondition) {
            throw new Error("Unsuccessful registration at the camp.");
            return 'error';
        } else if (isinCamp !== undefined) {
            return `The ${name} is already registered at the camp.`
        } else {
            let priceForStay = this.priceForTheCamp[condition];
            if (money < priceForStay || !Number(money)) {
                return `The money is not enough to pay the stay at the camp.`;
            } else {
                this.listOfParticipants.push({ name: name, condition: condition, power: 100, wins: 0 });
                return `The ${name} was successfully registered.`;
            }
        }
    }

    unregisterParticipant(name) {
        let isinCamp = this._find(name, 'name');
        let index = this.listOfParticipants.findIndex((x) => x.name == name);
        let isValidName = this._isValid('string', name);

        if (isinCamp === undefined || !isValidName) {
            throw new Error(`The ${name} is not registered in the camp.`);
            return 'error';
        } else {
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`;
        }
    }

    timeToPlay(typeOfGame, ...args) {

        let participant1InCamp = this._find(args[0], 'name');
        if (participant1InCamp === undefined) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame === 'WaterBalloonFights') {

            let participant2InCamp = this._find(args[1], 'name');

            let isValidP1Name = this._isValid('string', args[0]);
            let isValidP2Name = this._isValid('string', args[1]);
            let isValidGameName = this._isValid('string', typeOfGame);

            if (participant1InCamp === undefined || participant2InCamp === undefined || !isValidP1Name || !isValidP2Name) {
                throw new Error(`Invalid entered name/s.`);
                return 'error';
            } else if (participant1InCamp.condition !== participant2InCamp.condition) {
                throw new Error(`Choose players with equal condition.`);
                return 'error';
            } else {
                let p1Power = participant1InCamp.power;
                let p2Power = participant2InCamp.power;

                if (p1Power > p2Power) {
                    participant1InCamp.wins++;
                    return `The ${participant1InCamp.name} is winner in the game ${typeOfGame}.`
                } else if (p1Power < p2Power) {
                    participant2InCamp.wins++;
                    return `The ${participant2InCamp.name} is winner in the game ${typeOfGame}.`
                } else {
                    return `There is no winner.`;
                }
            }
        } else if (typeOfGame === 'Battleship') {
            participant1InCamp.power += 20;
            return `The ${participant1InCamp.name} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {
        let output = [];
        output.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        let sorted = this.listOfParticipants.sort((a, b) => b.power - a.power);

        for (const obj of sorted) {
            output.push(`${obj.name} - ${obj.condition} - ${obj.power} - ${obj.wins}`);
        }

        return output.join('\n');
    }
}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 299));

console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));

// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));

// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));

// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
// console.log(summerCamp.unregisterParticipant("Dimitur Kostov"));
// console.log(summerCamp.unregisterParticipant("Sara Dickinson"));


console.log(summerCamp.toString());