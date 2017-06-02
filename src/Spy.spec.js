describe('Spy', function () {
  it('should record all calls', function () {
    const spy = jasmine.createSpy();

    spy(1, 2, 3);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1, 2, 3);
  });
});