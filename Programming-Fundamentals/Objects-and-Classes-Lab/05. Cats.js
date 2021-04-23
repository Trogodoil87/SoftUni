function catsInfo(inputArr) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        speak() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }


    for (let i = 0; i < inputArr.length; i++) {
        let [name, age] = inputArr[i].split(' ');
        cats.push(new Cat(name, age));
    }

    for (let obj of cats) {
        obj.speak();
    }
        
}

catsInfo(['Mellow 2', 'Tom 5']);