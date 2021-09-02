function printLargestN(...numbers) {
    let number = Math.max(...numbers);

    console.log(`The largest number is ${number}.`);
} 

printLargestN(5, -3, 16);