describe('read and assert from file', () => {
    it('read and assert', () => {
        cy.readFile('cypress/fixtures/ticketList.json').then(userData => {
            expect(userData.data[0].id).to.equal(2)
            expect(userData.data[1].name).to.equal('Elf F')
        })
    });
});