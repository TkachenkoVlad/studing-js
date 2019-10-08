'use strict';
//
//
// async function test() {
//     let result;
//     let a = 3;
//     let b = 1;
//     // a + b < 4 ? result = 'lowest' : result = 'biggest';
//     result = (a + b < 4) ? 'lowest' : 'biggest';
//     console.log(result);
//
//     let login = '';
//     let message = (login === '1') ? 'Hi1' : (login === '2') ? 'H2' : (login === '') ? 'null' : '_';
//     console.log(message);
//
//     const readline = require('readline').createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     await readline.question(`What's your name?`, (name) => {
//         console.log(`Hi ${name}!`);
//         readline.close()
//     });
//     console.log('before loop');
//
//
//     function showMessage() {
//         console.log('Hello');
//     }
//
//     showMessage();
//
//     function showPrimes(n) {
//
//         for (let i = 2; i < n; i++) {
//             if (!isPrime(i)) continue;
//
//             console.log(i);  // a prime
//         }
//     }
//
//     function isPrime(n) {
//         for (let i = 2; i < n; i++) {
//             if (n % i == 0) return false;
//         }
//         return true;
//     }
//
//     showPrimes(5);
//
//
//     let schedule = {1: ''};
//     console.log(isEmpty(schedule));
//
// }
//
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
//
// }
//
// console.log(isPalindrome('level'));
// console.log(isPalindrome('12'));
//
// function isPalindrome(inputString) {
//     if (inputString == null || undefined)
//         throw new Error('Bad input string');
//     console.log(inputString);
//     let rawString = inputString.toLowerCase().split('').reverse().join('');
//     console.log(rawString);
//     return inputString === rawString ? true : false;
// }
//
// console.log(disemvowel("This website is for losers LOL! Ths wbst s fr lsrs LL!"));
//
// function disemvowel(str) {
//     let vowelsTemplate = ['a', 'e', 'i', 'o', 'u'];
//     let rawStr = new String();
//     for (let char in str) {
//         if (vowelsTemplate.includes(str[char].toLowerCase().trim()))
//             continue;
//         else
//             rawStr = rawStr + str[char];
//     }
//     console.log(rawStr);
//     return rawStr;
// }
//
// String.prototype.toJadenCase = function () {
//     return this.toLowerCase().replace(/(^|\s)\S/g, (R) => R.toUpperCase());
// };
//
//
// let str = "How can mirrors be Real if our eyes aren't real";
// console.log(str.toJadenCase());

function findNextSquare(sq) {
    let value = Math.sqrt(sq);
    if (Number.isInteger(value)) {
        return Math.pow(++value, 2);
    }
    return -1
}

console.log(findNextSquare(121));

function removeChar(str) {
    return str.slice(0, str.length - 1).slice(1);
}

console.log(removeChar('lalala1'));

let number = function (busStops) {
    console.log(busStops);
    let counter = 0;
    for (let i in busStops) {
        counter = counter + busStops[i][0] - busStops[i][1];
    }
    return counter;
};
console.log(number([[10, 0], [3, 5], [5, 8]]));

const binaryArrayToNumber = arr => parseInt(arr.join('', 2));
console.log(binaryArrayToNumber([0, 0, 0, 1, 1, 1, 0, 0]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 1]));
console.log(binaryArrayToNumber([0, 1, 0, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 1]));

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or
more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and
 spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns
 "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
 */
function spinWords(str) {
    let rawVar = str.split(' ');
    for (let i = 0; i < rawVar.length; i++) {
        console.log(i);
        if (i === 0) str = rawVar[i];
        else str = str + rawVar[i].split('').reverse().join('')

    }
    return str;
}

console.log(spinWords("123 456 789"));


let Ball = function (ballType = "regular") {
    this.ballType = ballType;
};
let ball1 = new Ball();
let ball2 = new Ball('lol');
console.log(ball1.ballType);
console.log(ball2.ballType);


let a = {a: 1, b: 3};
let b = {a: 1, b: 4, c: 3};


let c = {...a, ...b};
console.log("c", c);
console.log("a1", a);
Object.assign(a, b);
console.log("a2", a);


let Hero = function (name = 'Hero') {
    return {
        name,
        position: '00',
        health: 100,
        damage: 5,
        experience: 0
    }
};


let hero1 = new Hero();
hero1.name = 'lol';
console.log(hero1);


function Hero2(name = 'Hero') {
    this.name = name;
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;

}

let hero3 = new Hero2('test1');
console.log(hero3);

hero3.experience = '10000';
console.log(hero3);
hero3.experience = 200;
console.log(hero3);

let greet = function (language = 'english') {
    let languagesObj = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };
    if (languagesObj.hasOwnProperty(language)) return languagesObj[language];
    else return languagesObj.english
};

console.log(greet('english'));

// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
// console.log(highestRank([12, 10, 8, 3, 3, 3, 3, 3, 10, 4, 10, 12, 10]));

// function highestRank(arr) {
//     let counterObj = {};
//     for (let i in arr) {
//         if (!counterObj.hasOwnProperty(arr[i])) counterObj[arr[i]] = 0;
//         let rawCounter = 0;
//         for (let j in arr) {
//             arr[j] == arr[i] ? rawCounter++ : rawCounter;
//             counterObj[arr[i]] = rawCounter;
//         }
//     }
//     console.log(counterObj);
//     let ordered = {};
//     let keys = Object.keys(counterObj).sort(function (a, b) {
//         return b - a;
//     });
//     console.log('keys', keys);
//     keys.forEach(function (key) {
//         ordered[key] = counterObj[key];
//         console.log(ordered)
//     });
//     console.log('ordered', ordered);
//     ordered = Object.keys(counterObj).sort(function (a, b) {
//         return ordered[b] - ordered[a];
//     });
//     console.log(ordered);
//     return ordered[0]
// }


function highestRank(arr) {
    let obj = {};
    arr.forEach(function (elem) {
        if (obj[elem] === undefined)
            obj[elem] = 0;
        obj[elem]++;
    });
    console.log(obj);
    let keys = Object.keys(obj), highest = 0, key;
    keys.forEach(function (elem) {
        if (obj[elem] >= highest) {
            highest = obj[elem];
            key = elem;
        }
    });
    return parseInt(key);
}

var list1 = [{
    "firstName": "Emma",
    "lastName": "U.",
    "country": "Belgium",
    "continent": "Europe",
    "age": 39,
    "language": "Python"

}, {
    "firstName": "Joao",
    "lastName": "D.",
    "country": "Portugal",
    "continent": "Europe",
    "age": 35,
    "language": "JavaScript"
},  {
    "firstName": "Mamadou",
    "lastName": "E.",
    "country": "Mali",
    "continent": "Africa",
    "age": 22,
    "language": "Python"
},  {
    "firstName": "Nareh",
    "lastName": "Q.",
    "country": "Armenia",
    "continent": "Europe",
    "age": 30,
    "language": "Clojure"
},  {
    "firstName": "Mariami",
    "lastName": "G.",
    "country": "Georgia",
    "continent": "Europe",
    "age": 29,
    "language": "Python"
}, {
    "firstName": "Yerasyl",
    "lastName": "D.",
    "country": "Kazakhstan",
    "continent": "Asia",
    "age": 22,
    "language": "Ruby"
}, {
    "firstName": "Marija",
    "lastName": "U.",
    "country": "Republic of Macedonia",
    "continent": "Europe",
    "age": 42,
    "language": "JavaScript"
},  {
    "firstName": "Emma",
    "lastName": "B.",
    "country": "Norway",
    "continent": "Europe",
    "age": 89,
    "language": "Clojure"
}, {
    "firstName": "Maia",
    "lastName": "S.",
    "country": "Tahiti",
    "continent": "Oceania",
    "age": 28,
    "language": "Clojure"
}, {
    "firstName": "Jing",
    "lastName": "X.",
    "country": "China",
    "continent": "Asia",
    "age": 39,
    "language": "Ruby"
},  {
    "firstName": "George",
    "lastName": "B.",
    "country": "England",
    "continent": "Europe",
    "age": 21,
    "language": "C"
},
    {
    "firstName": "Mohammad",
    "lastName": "N.",
    "country": "United Arab Emirates",
    "continent": "Asia",
    "age": 39,
    "language": "C"
}, {
    "firstName": "Noa",
    "lastName": "A.",
    "country": "Israel",
    "continent": "Asia",
    "age": 40,
    "language": "Ruby"
},
   {
    "firstName": "Daniel",
    "lastName": "J.",
    "country": "Aruba",
    "continent": "Americas",
    "age": 42,
    "language": "JavaScript"
},  {
    "firstName": "Lukas",
    "lastName": "X.",
    "country": "Croatia",
    "continent": "Europe",
    "age": 35,
    "language": "Python"
}, {
    "firstName": "Luka",
    "lastName": "J.",
    "country": "Slovenia",
    "continent": "Europe",
    "age": 29,
    "language": "Clojure"
},  {
    "firstName": "Alexander",
    "lastName": "F.",
    "country": "Russia",
    "continent": "Europe",
    "age": 89,
    "language": "Java"
},  {
    "firstName": "Liam",
    "lastName": "D.",
    "country": "Faroe Islands",
    "continent": "Europe",
    "age": 28,
    "language": "Python"
}, {
    "firstName": "Shufen",
    "lastName": "L.",
    "country": "Taiwan",
    "continent": "Asia",
    "age": 35,
    "language": "PHP"
}, {
    "firstName": "Oliver",
    "lastName": "Q.",
    "country": "Australia",
    "continent": "Oceania",
    "age": 19,
    "language": "PHP"
}, {
    "firstName": "Seoyeon",
    "lastName": "J.",
    "country": "South Korea",
    "continent": "Asia",
    "age": 29,
    "language": "Ruby"
},
    {
    "firstName": "Noel",
    "lastName": "O.",
    "country": "Albania",
    "continent": "Europe",
    "age": 23,
    "language": "Python"
}, {
    "firstName": "Sofija",
    "lastName": "Q.",
    "country": "Latvia",
    "continent": "Europe",
    "age": 29,
    "language": "Ruby"
}, {
    "firstName": "William",
    "lastName": "L.",
    "country": "Sweden",
    "continent": "Europe",
    "age": 32,
    "language": "Java"
} ];

console.log(list1.length);

console.log(findSenior(list1));

function findSenior(list) {
    let maxAge = Math.max(...list.map(person => person.age));
    return list.filter(person => person.age === maxAge);
}