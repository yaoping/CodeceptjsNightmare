
Feature('Search customer by sepcify keys');

Before((I) => { // or Background
    I.amOnPage('/');
    I.click('#auth > a:nth-child(1)');
    I.click('#customers > a');
});

Scenario('search specify customer successfully', (I, customerPage) => {
    customerPage.filterBySpecifyKeys('scrooge', 'scrooge@example.com');
    I.see('ScroogeMcduck@example.com');
    I.saveScreenshot("product.png");

});
