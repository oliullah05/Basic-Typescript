"use strict";
// Learning Function 
// 1. Normal Function
function sum255(num1, num2, num3) {
    return num1 + num2 + num3;
}
var sumArrow = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 7; }
    return num1 + num2 + num3;
};
// Object=>funtion > method
var poorUser = {
    name: "oli",
    balance: 0,
    addBalence: function (balance) {
        return this.balance + balance;
    },
    addBalence2: function (balance) {
        return "this is his balence now ".concat(this.balance + balance);
    },
};
// Function in map
var arr = [1, 2, 3, 4, 5, 6, 7];
var arrSqure = arr.map(function (element) { return element * element; });
