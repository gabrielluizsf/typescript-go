//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames7_ES5.ts] ////

//// [computedPropertyNames7_ES5.ts]
enum E {
    member
}
var v = {
    [E.member]: 0
}

//// [computedPropertyNames7_ES5.js]
var E;
(function (E) {
    E[E["member"] = 0] = "member";
})(E || (E = {}));
var v = {
    [E.member]: 0
};
