let x; // use
var y; // ne pas use
const z = 1; // use, 98% des variables

// pas de type dans JS, juste un nom de variable
// camel case, minusculeMajuscule, pas de type
const firstName = 'David'; // Définir un identificateur ne pouvant pas être réaffectée
let age = 19; // Définir une variable pouvant être réaffectée


console.log(firstName);

age++;
//age = 'bleu';
age++; 


console.log(age);

const test = 'b' + 'a' + + 'a' + 'a';

console.log(test);

function infoUser(firstName, age){
//return "Bonjour je m'appelle " + firstName + " et j'ai " + age + " ans";
    return `Bonjour je m'apelle ${firstName} et j'ai ${age} ans.`
}
const result = infoUser('David', 19)
console.log(infoUser(firstName, age));

const equalTestUn = 1 == '1'; // boxing 'True'
const equalTestDeux = 1 === '1'; // pas de boxing 'False'
console.log(equalTestUn);

