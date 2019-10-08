/*
 Exercises took from this link: https://github.com/HowProgrammingWorks/Reusable/blob/master/Exercises.en.md
 */
'use strict';
/*
 Identifiers
 */
const name = 'Vlad';
const birthYear = 1994;
const greeting = (name) => console.log(`Hello ${name} !`);
greeting(name);
/*
 Loops
 */
const range = (startNumber, endNumber) => {
    let arrayOfRange = [];
    for (let i = startNumber; i <= endNumber; i++) arrayOfRange.push(i);
    return arrayOfRange;
};
console.log(range(15, 30));
const rangeOdd = (startNumber, endNumber) => {
    let arrayOfRange = [];
    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 2 === 1) arrayOfRange.push(i);
    }
    return arrayOfRange;
};
console.log(rangeOdd(15, 30));
/*
 Functions
 */
const average = (firstNumber, secondNumber) =>
    range(firstNumber, secondNumber).reduce((total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) return total / array.length;
        else return total;
    });
console.log(average(1, 10));
const square = (number) => Math.pow(number, 2);
const cube = (number) => Math.pow(number, 3);
const calculate = () => {
    let array = [];
    for (let i = 0; i <= 9; i++)
        array.push(average(square(i), cube(i)));
    return array;
};
console.log(calculate());
console.log(average(square(2), cube(2)));
/*
 Objects
 */
const fn = () => {
    const obj1 = {name: undefined};
    let obj2 = {name: undefined};
    obj1.name = 'Test';
    obj2.name = 'Test';
    //  obj1 = {newname: 'lol'}; Comment: obj1 it's constant that is why it object can't changed like obj2,
    //  but can to change value of his field that we saw in previously step
    obj2 = {newName: 'lol'};
    console.log('obj1', obj1);
    console.log('obj2', obj2);
};
fn();
const createUser = (name, city) => ({name, city});
console.log(createUser('Vlad', 'Kyiv'));
/*
 Collections: Array
 */
const phoneBookArray = [
    {name: 'Marcus', phone: '+38011111'},
    {name: 'Antonius', phone: '+38022222'},
    {name: 'Yulius', phone: '+38033333'}
];
const findByName = (name) => phoneBookArray.find(phoneBookArray => phoneBookArray.name === name).phone;
console.log(findByName('Marcus'));
/*
 Collections: Hash (Object)
 */
