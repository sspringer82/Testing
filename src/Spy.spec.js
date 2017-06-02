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
  })

});