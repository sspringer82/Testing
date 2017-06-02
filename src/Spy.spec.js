describe('Spy', function () {
  it('should record all calls', function () {
    const spy = jasmine.createSpy();

    execute(spy);

    //expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Hello World');
  });

  it('should call the original function', function () {

    const obj = {
      callback(value) {
        expect(value).toBe('Hello World');
      }
    }

    spyOn(obj, 'callback').and.callThrough();

    execute(obj.callback);

    expect(obj.callback).toHaveBeenCalled();
  });

  describe('random', function() {
    it('should return the value 2', function () {

      //spyOn(Math, 'random').and.returnValue(0.2);
      
      spyOn(Math, 'random').and.callFake(function () {
        return 0.2
      });

      const result = getRandomInteger();

      expect(result).toBe(2); 
    });

    it('should return 2', function () {
      spyOn(window, 'getRandomInteger').and.returnValue(2);

      const result = getRandomInteger();

      expect(result).toBe(2);
    })
  });

});