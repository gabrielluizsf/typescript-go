//// [tests/cases/conformance/es6/computedProperties/computedPropertyNamesContextualType10_ES5.ts] ////

//// [computedPropertyNamesContextualType10_ES5.ts]
interface I {
    [s: number]: boolean;
}

var o: I = {
    [+"foo"]: "",
    [+"bar"]: 0
}

//// [computedPropertyNamesContextualType10_ES5.js]
var o = {
    [+"foo"]: "",
    [+"bar"]: 0
};
