const fs = require('fs');

module.exports = class Calc {

  add(a, b) {
    fs.appendFileSync('/tmp/result', a + b);
  }

}