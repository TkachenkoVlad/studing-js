'use strict';
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
/*
Version 1.2
 */
// let combineReducers = (reducers) => (state, item) =>
//     Object.keys(reducers).reduce((nextState, key) =>
//         reducers[key](state, item), {});
/*
Version 1.1
 */
let combineReducers = (reducers) => (state, item) =>
    Object.keys(reducers).reduce((nextState, key) => {
        reducers[key](state, item);
        return state;
    }, {});
/*
Version 1.0
*/
// let combineReducers = function(reducers) {
//     return function(state, item) {
//         return Object.keys(reducers).reduce(function(nextState, key) {
//             reducers[key](state, item);
//             return state;
//         }, {});
//     }
// };
let totalPrice = selected.reduce(combineReducers(reducers), {
    rubles: 0,
    pounds: 0,
    dollars: 0,
    euros: 0,
    yens: 0
});
console.log(totalPrice);