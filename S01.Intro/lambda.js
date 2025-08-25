function add(a, b){
    return a+b;
}

// => Fonction lambda (Fonction sans nom) / (Fonction anonyme)
const addLambda = (a,b) => {return a+b;}

const result = add(7,9);
const resultl = addLambda(7,9);

const fruits = ['Kiwi', 'Banane','Fraise','Pamplemousse','Mangue'];

fruits.forEach((fruit) => {console.log(fruit);}) ;
                                            // check if true
const resultFilter = fruits.filter(fruit => fruit.length > 4);

console.log(resultFilter);

const numbers = [34,28,52,18,104,67];
const MULTIPLIER = 3;

const numbersX3 = numbers.map(n => n * MULTIPLIER);
console.log(numbersX3);

const chainLambda = numbersX3
.filter(n => n > 100)
.map(n => n * 7 + 2 - 7 % 4)
.forEach(n => console.log(n));

