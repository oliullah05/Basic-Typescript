"use strict";
{
    // nullable type
    var searchName = function (text) {
        if (text) {
            console.log("searching");
        }
        else {
            console.log("not found anything");
        }
    };
    searchName(null);
    // unknown typeOf
    var getSpeedInMetterPerSecound = function (value) {
        if (typeof (value) === "number") {
            var converted = (value * 1000) / 3600;
            console.log("your speed is ".concat(converted, " ms-1"));
        }
        else if (typeof (value) === "string") {
            var _a = value.split(" "), speed = _a[0], unit = _a[1];
            var convertNumber = parseFloat(speed);
            var converted = (convertNumber * 1000) / 3600;
            console.log("your speed is ".concat(converted).concat(unit));
        }
        else {
            console.log("wrong input");
        }
        // }
    };
    getSpeedInMetterPerSecound(1200);
    getSpeedInMetterPerSecound("12000 kmh-1");
    getSpeedInMetterPerSecound(null);
    // never type 
    var genarateError = function (value) {
        throw new Error(value);
    };
    genarateError("error is really pain");
}
