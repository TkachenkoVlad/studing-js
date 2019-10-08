'use strict';

////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');
console.log('F~U~N~C~T~I~O~N');
const f1 = (...args) => {
    console.log(args);
};

f1(1, 2, 3);
////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');
const f2 = (...args) => {
    args.forEach(arg => {
        const type = typeof arg;
        console.log('type: ' + type);
        if (type === 'object') console.log('Value: ' + JSON.stringify(arg));
        else console.log('Value: ' + arg);
    })
};

f2(1, 'lol', {key: 'value'});
////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');
const sum = new Function('a,b', 'return a+b');

console.dir({
    name: sum.name,
    length: sum.length,
    toString: sum.toString(),
});
////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');
const powName = 'pow';
const obj1 = {
    fn1: function inc(a) {
        return ++a;
    },
    sum: function (a, b) {
        return a + b;
    },
    inc(a) {
        return ++a;
    },
    max: (a, b) => {
        return a > b ? a : b
    },
    min: (a, b) => (a < b ? a : b),
    dec: (a) => --a,
    [powName](a, b) {
        return Math.pow(a, b);
    }
};
console.log('obj1.fn1.name = ' + obj1.fn1.name);
console.log('obj1.sum.name = ' + obj1.sum.name);
console.log('obj1.inc.name = ' + obj1.inc.name);
console.log('obj1.max.name = ' + obj1.max.name);
console.log('obj1.min.name = ' + obj1.min.name);
console.log('obj1.dec.name = ' + obj1.dec.name);

console.log('obj1.fn1(5) = ' + obj1.fn1(5));
console.log('obj1.sum(1,3) = ' + obj1.sum(1, 3));
console.log('obj1.max(8,6) = ' + obj1.max(8, 6));

console.log('obj1.pow(8,6) = ' + obj1.pow(8, 6));
console.log('obj1.max(8,6) = ' + obj1[powName](8, 6));
////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');
const Context = function () {
    this.name = 'Marcus';
    const city = {
        name: 'Kyiv',
        year: 482,
        f1: function () {
            return this.name;
        },
        f2: () => {
            return this.name;
        },
        f3() {
            return this.name;
        },
    };
    return city;
};

const city = new Context();

console.log('city.f1() = ' + city.f1());
console.log('city.f2() = ' + city.f2());
console.log('city.f3() = ' + city.f3());
////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');
const hash = () => {
    const data = {};
    let counter = 0;
    return (key, value) => {
        data[key] = value;
        counter++;
        console.dir({counter});
        return data;
    };
};
// Usage
const h1 = hash();
h1('name', 'Marcus');
h1('city', 'Roma');
const obj1new = h1('born', 121);
console.dir({obj1: obj1new});
////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');
const add = x => y => {
    const z = x + y;
    console.log(x + '+' + y + '=' + z);
    return add(z);

};

const a1 = add(1);
const a2 = a1(20);
a2(5);
const result = add(1)(2)(3)(4);

console.log(a2, result);
////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');
console.log('A~R~R~A~Y~s // OB~J~E~C~T~S // C~L~A~S~S~E~S // P~R~O~T~O~T~Y~P~E~S');

function log(n) {
    for (let i = 1; i <= Math.min(n, 100); i++)
        console.log(i);
}

log(5);

function evenElementsArray(array) {
    console.log(array.length);
    let newArray = Array(Math.ceil(array.length / 2));
    console.log(newArray, newArray.length);
    for (let i = 0; i < array.length; i++) {
        console.log('i = ', i);
        console.log('i % 2 = ', i % 2);
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
            console.log(array[i]);
            console.log(i / 2);
            console.log(newArray[i / 2] = array[i]);
        }
        for (let j = 0; j < i; j++) {
            console.log('hello');
        }
    }
    return newArray;
}

console.log(evenElementsArray([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]));

[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10].reduce((acc, val) => {
    console.log(acc + '+' + val);
    return acc + val
});
////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');

const person = {
    name: 'Vlad',
    city: 'Kyiv',
    born: 1994,
};
console.log(person);


function Person(name, city) {
    this.name = name;
    this.city = city;
}

let vladPerson = new Person('Vlad', 'Kyiv',);
console.log(vladPerson);
console.log(vladPerson.city);

const s = JSON.stringify(person);
console.log(s);

const obj = JSON.parse(s);
console.dir(obj);

////////////////////////////////////////////////////////////////////
console.log('////////////////////////////////////////////////////////////////////');
console.log('P~A~R~T~I~A~L');
const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest));

const sum4 = (a, b, c, d) => (a + b + c + d);
const f11 = partial(sum4, 1);
const f12 = partial(f11, 2);
const f13 = partial(f12, 3);
const y1 = f13(4);
console.log(y1);

const f21 = partial(sum4, 1, 2);
const f22 = partial(f21, 3);
const y2 = f22(4);
console.log(y2);
console.log('////////////////////////////////////////////////////////////////////');
const curry = fn => (...args) => {
    if (fn.length > args.length) {
        const f = fn.bind(null, ...args);
        return curry(f);
    } else {
        return fn(...args);
    }
};

const f = curry(sum4);
const y11 = sum4(1, 2, 3, 4);
const y22 = f(1, 2, 3, 4);
const y33 = f(1, 2, 3)(4);
console.log('////////////////////////////////////////////////////////////////////');
let count = 0;
const arr = [7, 10, 1, 5, 2];
const sum11 = (acc, val) => (count++, console.log(count, acc, val), acc + val);
const res = arr.reduce(sum11, 20);
console.dir({res, count});
console.log('////////////////////////////////////////////////////////////////////');
let nums = [10, 20, 30, 40, 50];
let sum22 = nums.reduce(function (result, num) {
    console.log(result);
    return result + num;
}, 10);
console.log('////////////////////////////////////////////////////////////////////');
let strs = ['JavaScript', 'is', 'awesome'];
let result123 = strs.reduce(function (phrase, word, index) {
    // Перед первым словом не надо ставить пробел
    return (index === 0) ? phrase + word : phrase + ' ' + word;
}, '');
console.log(result123);
console.log('////////////////////////////////////////////////////////////////////');
let selected = [
    {price: 20},
    {price: 45},
    {price: 67},
    {price: 1305}
];
let reducers = {
    rubles: (state, item) => state.rubles += item.price,
    dollars: (state, item) => state.dollars += item.price / 71.6024,
    euros: (state, item) => state.euros += item.price / 79.0133,
    yens: (state, item) => state.yens += item.price / 0.6341,
    pounds: (state, item) => state.pounds += item.price / 101.7829
};
//
let combineReducers = (reducers) => (state, item) =>
    Object.keys(reducers).reduce((nextState, key) => reducers[key](state, item), {});

// let combineReducers = (reducers) => (state, item) =>
//     Object.keys(reducers).reduce((nextState, key) => {
//         reducers[key](state, item);
//         return state;
//     }, {});

let priceReducer = combineReducers(reducers);

let totalPrice = selected.reduce(priceReducer, {
    rubles: 0,
    pounds: 0,
    dollars: 0,
    euros: 0,
    yens: 0
});
console.log(totalPrice);


console.log([0, 1, 2, 3, 4].reduce((accumulator, currentValue) => accumulator + currentValue, 10));


