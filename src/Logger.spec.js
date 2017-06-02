describe('Logger', function () {

  let logger;

  beforeEach(function () {
    logger = new Logger();
    spyOn(console, 'error');
    spyOn(console, 'log');
  });

  it('should log an info message if severety is info', function () {
    logger.log('Msg', 'info');

    expect(console.log).toHaveBeenCalledWith('Msg');
    expect(console.error).not.toHaveBeenCalled();
  });

  it('should log an error message if severety is error', function () {
    logger.log('Msg', 'error');

    expect(console.error).toHaveBeenCalledWith('Msg');
    expect(console.log).not.toHaveBeenCalled();
  });
});