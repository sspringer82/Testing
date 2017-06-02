describe('server communication', function () {

  beforeEach(function () {
    jasmine.Ajax.install();
  });

  afterEach(function () {
    jasmine.Ajax.uninstall();
  });

  it('should get data from the server and lot it', function () {
    const logger = new Logger();
    spyOn(logger, 'log');

    logName(function () {
      expect(logger.log).toHaveBeenCalledWith('Klaus');
    });
    
    jasmine.Ajax.requests.mostRecent().respondWith({
      "status": 200,
      "contentType": 'text/plain',
      "responseText": 'Klaus'
    });

  })

});