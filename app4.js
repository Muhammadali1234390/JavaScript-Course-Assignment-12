function sum() {

let sum = 0;

for(let i = 1; i <= 100; i++) {
    if(i % 5 === 0) {
        sum += i;
    }
}

console.log("Sum of multiples of 5 between 1 and 100 is: " + sum);
}

