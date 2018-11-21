define(function(require,exports,modules){
  let mod2 = require('js/mod2.js');
  let mod3 = require('js/mod3.js');
  exports.a=1;
  exports.b=2;
  exports.result = mod2.num2+mod3.num3
})