describe('server communication', function () {

  beforeEach(function () {
    jasmine.Ajax.install();
  });

  afterEach(function () {
    jasmine.Ajax.uninstall();
  });

  it('should get data from the server and lot it', function (done) {
    const logger = new Logger();
    spyOn(logger, 'log');

    logName(logger).then(() => {
      expect(logger.log).toHaveBeenCalledWith('Klaus', 'info');
      done();
    });
    
    jasmine.Ajax.requests.mostRecent().respondWith({
      "status": 200,
      "contentType": 'text/plain',
      "responseText": 'Klaus'
    });

  })

});