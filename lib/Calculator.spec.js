
const mockery = require('mockery');
const expect = require('chai').expect;

describe('Calc', () => {

  let Calc;

  beforeEach(() => {
    mockery.enable();
    var fsMock = {
      appendFileSync: function (path, cb) { /* your mock code */ }
    };
    mockery.registerMock('fs', fsMock);

    Calc = require('./Calculator');
  });

  afterEach(() => {
    mockery.disable();
  });

  it('create an instance of the Calculator', () => {
    const calc = new Calc();
    expect(calc instanceof Calc).to.equal(true);
  });

  it('should write to a file', () => {
    const calc = new Calc();
    calc.add(1, 2);
  });

});