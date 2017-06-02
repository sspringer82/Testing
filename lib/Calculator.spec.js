const Calc = require('./Calculator');
const expect = require('chai').expect;

describe('Calc', () => {
  it('create an instance of the Calculator', () => {
    const calc = new Calc();
    expect(calc instanceof Calc).to.equal(true);
  });
});