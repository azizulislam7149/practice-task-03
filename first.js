const square = 6;
console.log(square**2);
const number = 8;
console.log(number% 10);

const me = 'aziz';
console.log(isNaN(me));
const me2 = 78;
console.log(isNaN(me2));
const x = '';
console.log(!!x)
const isRaining = true;
isRaining === true ?console.log('I will not outside'): console.log('I will go outside')
const fruits = ['mango'];
const flower = ['lotus'];
const adjust =fruits.concat(flower);
console.log(adjust)
const find = fruits.indexOf('banana');
console.log(find)
const foods = ['rice','dal','fish','meat'];
console.log(foods.slice(0,1))
const covertToJoinString = foods.join(', ')
console.log(covertToJoinString);
const foods2 = 'rice,dal,fish,meat';
const convertToArray = foods2.split(' ')
console.log(convertToArray);
for(let i = 0; i <=10; i++){
    console.log(i,'Azizul islam')
}
let address = ['village', 'malotibari', 'post', 'dhoronibari', 'thana', 'ulipur', 'district', 'kurigram'];
for(let i = 0 ; i < address.length; i++){
    console.log(address[i]);
}
let i = 0;
while(i<address.length){
    console.log( 'whats your address',address[i])
    i++;
}

let addressName = ['village', 'malotibari', 'post', 'dhoronibari', 'thana', 'ulipur', 'district', 'kurigram'];
for(let i = addressName. length -1; i>0; i--){
    console.log('my full address',addressName[i]);
}

let myAddressName = ['village', 'malotibari', 'post', 'dhoronibari', 'thana', 'ulipur', 'district', 'kurigram'];
let n = myAddressName.length -1;
while(n>=0){
    console.log('my full addresss',myAddressName[n])
    n--;
}
let numbers = [1, 2, 3, 4];
let sum = 0; 
for(let item of numbers){
    sum = sum + item ;
    
}

let avg = numbers.length
    console.log(avg);
console.log('sum of 1 to 4 numbers', sum);
let total = sum /avg;
console.log(total);

let allNumbers = [2, 4, 5,7];
let allNumbersLength =  allNumbers.length;
let sum1 = 0 ;
for(let item of allNumbers){
    sum = sum1 + item;
}
let average = sum / allNumbersLength;
console.log( 'total of numbers', average);

let evenNumbers = [234,56,897,879,34325,54343,667,45643,214,390];
let evens =[]
for(let item of evenNumbers){
    if(item % 2 === 0){
       evens.push(item);
    }
}
console.log(evens);

const person = {
    name  : 'Aziz'
}
person.age = 36;
person.profession= 'job';
person.qualification =['Dhakhil', 'Alim', 'Fadil', 'kamil'];
person.hobby ={
    '1stChoice' :'reading',
    '2nd choice': 'writing',
    mostWish :'To be a good webdeveloper'
}
console.log(person);