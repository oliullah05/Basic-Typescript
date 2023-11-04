"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{ // Spread Oparator
    var friendz1 = ["oli", 'koli', "moli"];
    var friendz2 = ["Rahat", 'Hasan', "Maruf"];
    friendz1.push.apply(friendz1, friendz2);
    console.log(friendz1);
    var teachers1 = {
        chemistry: "mohit",
        math: "Rasel",
        biology: "hasina"
    };
    var teachers2 = {
        chemistry: "mohit2",
        math: "Rasel2",
        biology: "hasina2"
    };
    var allTeachers = __assign(__assign({}, teachers1), teachers2);
    // Rest Oparator
    var greetings = function () {
        var friendz = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friendz[_i] = arguments[_i];
        }
        // console.log(`hi  ${friendz1+friendz2+friendz3}`);
        friendz.map(function (name) { return console.log("hi ".concat(name)); });
    };
    greetings("oli", "moli", "koli", "ubul", "chubol");
}
