//// [tests/cases/compiler/memberScope.ts] ////

//// [memberScope.ts]
module Salt {
  export class Pepper {}
  export module Basil { }
  var z = Basil.Pepper;
}



//// [memberScope.js]
var Salt;
(function (Salt) {
    class Pepper {
    }
    Salt.Pepper = Pepper;
    var z = Basil.Pepper;
})(Salt || (Salt = {}));
