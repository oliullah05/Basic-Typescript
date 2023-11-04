"use strict";
var _a, _b;
{
    // 2-11 Ternary, optional chaining & nullish
    // Ternary Oparator || optinal chaining || nullish coalescing oparator in typeScript
    // Ternary Oparator 
    var age = 144;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("babu");
    }
    var isAdult = age >= 18 ? "adult" : "babu";
    // console.log({isAdult});
    // nullish coalescing  oparator
    //  null | undefined => some condition
    var isAuthenticated = undefined;
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Geast user";
    var result2 = isAuthenticated ? isAuthenticated : "Geast USer 2";
    var user_1 = {
        name: "oliullah",
        address: {
            city: "dhaka",
            road: "awesome road",
            presentAddress: "dhaka"
        }
    };
    var permanentAddress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.parmanentAddress) !== null && _b !== void 0 ? _b : "not found permanent adress";
    console.log({ permanentAddress: permanentAddress });
}
