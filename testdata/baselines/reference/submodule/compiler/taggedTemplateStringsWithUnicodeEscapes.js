//// [tests/cases/compiler/taggedTemplateStringsWithUnicodeEscapes.ts] ////

//// [taggedTemplateStringsWithUnicodeEscapes.ts]
function f(...args: any[]) {
}

f `'\u{1f4a9}'${ " should be converted to " }'\uD83D\uDCA9'`;

//// [taggedTemplateStringsWithUnicodeEscapes.js]
function f(...args) {
}
f `'\u{1f4a9}'${" should be converted to "}'\uD83D\uDCA9'`;
