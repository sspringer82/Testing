describe('Form specs', () => {
  it('writes the name into the corresponding DOM element', () => {
    jasmine.getFixtures().fixturesPath = 'base/src/fixtures';
    jasmine.getFixtures().load('form.html');
    const name = 'Klaus';
    const form = new Form();

    form.registerClick();
    $('input').val(name);
    $('button').click();

    expect($('#user-name')).toHaveText(name);
  });
});