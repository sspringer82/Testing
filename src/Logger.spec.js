describe('Logger', function () {

  let logger;
  const dateString = 'Wed Oct 23 2013 00:00:00 GMT+0200 (CEST)';

  beforeEach(function () {
    jasmine.clock().install();
    let baseTime = new Date(2013, 9, 23);
    jasmine.clock().mockDate(baseTime);
  });

  beforeEach(function () {
    logger = new Logger();
    spyOn(console, 'error');
    spyOn(console, 'log');
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  })

  it('should log an info message if severety is info', function () {
    logger.log('Msg', 'info');

    expect(console.log).toHaveBeenCalledWith(dateString, 'Msg');
    expect(console.error).not.toHaveBeenCalled();
  });

  it('should log an error message if severety is error', function () {
    logger.log('Msg', 'error');

    expect(console.error).toHaveBeenCalledWith(dateString, 'Msg');
    expect(console.log).not.toHaveBeenCalled();
  });
});