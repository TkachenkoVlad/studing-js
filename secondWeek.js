'use strict';

let john = {
    name: "John",
    sayHi: function () {
        console.log("Hi buddy!");
    }
};

john.sayHi(); // Hi buddy!


let firstArray = [1, 2, 3, 4, 5, 6];

let result = firstArray.map(Math.sqrt);

console.log(result.filter(result => result > 2));

function isBiggerThan10(element) {
    return element > 10;
}

console.log(new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10)); // false)
console.log(new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10));


console.log(new Uint8Array([2, 5, 8, 1, 4]).some(elem => elem > 10)); // false
console.log(new Uint8Array([12, 5, 8, 1, 4]).some(elem => elem > 10)); // true


console.log(6.35.toFixed(20));
console.log(1.35.toFixed(20));

console.log('my\n'.length);

let alphabetArray = [];

for (let i = 65; i <= 90; i++) {
    alphabetArray.push(String.fromCodePoint(i));
}

console.log(alphabetArray);


let keyboard = [0, 1, 2, 3].map(function () {
    return new Array(1).fill().map(function () {
        return new Array(4).fill(0);
    });
});
console.log(keyboard);

keyboard = [
    ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '_', '/']
];
console.log(keyboard);

let alphabetFind = function (word) {
    let charArray = word.split('');
    let currentIndex = 0;
    let sum = 0;
    let counter = 0;
    charArray.forEach(function (element) {
        if (counter === 0) {
            sum = alphabetArray.indexOf(element.toUpperCase()) + 1;
            console.log(sum);
        } else {
            console.log(alphabetArray.indexOf(element.toUpperCase()) + 1);
            sum = sum + Math.abs(alphabetArray.indexOf(element.toUpperCase()) + 1 - currentIndex);
        }
        console.log(element, sum);
        currentIndex = alphabetArray.indexOf(element.toUpperCase()) + 1;
        counter++;
    });

    console.log(word, sum);
    return 1;
};


let tvRemote = function (word) {
    let charArray = word.split('');
    let globalCounter = 0;
    let positionCounter = 0;

    charArray.forEach(function (element) {
        console.log('Find this char: ', element);
        for (let i = 0; i < keyboard.length; i++) {
            console.log(keyboard[i]);

            if (!keyboard[i].includes(element) && globalCounter != 0) {
                globalCounter++;
                continue;
            }

            for (let j = positionCounter; j < keyboard[i].length; j++) {
                let localCounter = 0;
                console.log(keyboard[i][j]);
                globalCounter++;
                localCounter++;
                if (element === keyboard[i][j]) {
                    positionCounter = localCounter;
                    console.log(`Time to break, counter: ${globalCounter}`);
                    break;
                }
            }

        }
        console.log(`Char ${element}, counter: ${globalCounter}`);
    });

    return globalCounter;
};

console.log(tvRemote('codewars'));


console.log(getMaxSum([-1, -2, -3, -9, -11]));

function getMaxSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;

        for (let j = i; j < arr.length; j++) {

            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);

        }
    }
    return maxSum;
}


let vartet;

if (vartet) console.log('true');
else console.log('false');


vartet ? console.log(true) : console.log(false);


let date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());


class Dog {
    #sound = 'Woof! Woof!';

    makeSound() {
        console.log(this.#sound);
    }
}

const tommy = new Dog();
tommy.makeSound();


let jhon = function () {
    this.bills = [124, 48, 268, 180.42];
    this.name = 'Jhon Smith';
    this.calcTips = function () {
        this.tips = [];
        this.finalValues = [];


        for (let i = 0; i < this.bills.length; i++) {

        }

    }

};



