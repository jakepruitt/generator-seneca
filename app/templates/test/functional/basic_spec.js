describe('main page functionality', function() {
  it('should show the main page when root is accessed', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toBe('/');
    expect($('h1').getText()).toMatch(/Hello/i);
  });

  it('should have an indicator that the backend is properly working', function(done) {
    browser.get('/');
    expect($('p').getText()).toMatch(/working/i);
  });
});
