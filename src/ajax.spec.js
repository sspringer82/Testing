describe('server communication', function () {
  it('should get data from the server and lot it', function () {
    jasmine.Ajax.install();
    spyOn(console, 'log');

    logName();
    jasmine.Ajax.requests.mostRecent().respondWith({
      "status": 200,
      "contentType": 'text/plain',
      "responseText": 'Klaus'
    });

    expect(console.log).toHaveBeenCalledWith('Klaus');
    jasmine.Ajax.uninstall();
  })
});