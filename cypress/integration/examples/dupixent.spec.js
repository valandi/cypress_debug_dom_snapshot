describe("DupixentTest", () => {
    
    it(`dupixent test`, function () {
        cy.eyesOpen({
            appName: 'Dupixent CRSWNP',
            testName: 'Smoke Test - Dupixent CRSWNP'
        })

        cy.visit('https://www.dupixent.com/crswnp/about-nasal-polyps');
        cy.scrollTo('bottom');
        cy.scrollTo('top');

        cy.eyesCheckWindow({
            tag: "Dupixent Page",
            target: 'window',
            fully: true
        });

        cy.eyesClose()
    });
});
