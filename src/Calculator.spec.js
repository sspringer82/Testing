describe('Calc', function () {
  let calc;

  // sparsam benutzen
  beforeAll(function () {
    console.log('beforeAll');
  });
  afterAll(function () {
    console.log('afterAll');
  });

  // häufig nutzen für initialisierung
  beforeEach(function () {
    console.log('beforeEach');
    calc = new Calc();
  });

  // häufig nutzen für aufräumen
  afterEach(function () {
    console.log('afterEach');
  })

  it ('should create an instance of calc', function () {
    console.log('in my test');
    // arrange
    // act
    const result = calc instanceof Calc;

    // assert
    expect(result).toBe(true);
  });

  describe('add', function () {
    beforeEach(function() {
      console.log('before addition');
    });

    it('should add 1 and 1 and return 2', function () {
      const result = calc.add(1, 1);

      expect(result).toBe(2);
    });

    it('should add 2 and 3 and return 5', function () {
      const result = calc.add(2, 3);
      
      expect(result).toBe(5);
    });
  });

});