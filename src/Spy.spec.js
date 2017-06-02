describe('Spy', function () {
  it('should record all calls', function () {
    const spy = jasmine.createSpy();

    spy(1, 2, 3);

    debugger;

    expect(spy).not.toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalledWith(1, 2, 3);
  });
});