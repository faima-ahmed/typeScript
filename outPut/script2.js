"use strict";
//ENUMS
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response2 = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: 'test',
};
console.log(response2);
//TUPLES
let a = [3, 'hello', { p: 3 }];
//a[1]= 3;
let b = [4, 'world', { t: 1 }];
