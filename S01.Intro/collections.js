const fruits = ['Kiwi', 'Banane','Fraise','Pamplemousse','Mangue'];

fruits.push('Framboises');
fruits.push(12);

// "normal" way
for (let i = 0 ; i < fruits.length; i++){
    console.log(fruits[i]);
}

// ressemble a un 'foreach'
for(let fruit of fruits){
    console.log(fruit)
}

