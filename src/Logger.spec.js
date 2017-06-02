describe('Logger', function () {
  it('should log an info message if severety is info', function () {
    const logger = new Logger();
    spyOn(console, 'log');

    logger.log('Msg', 'info');

    expect(console.log).toHaveBeenCalledWith('Msg');
  });
});