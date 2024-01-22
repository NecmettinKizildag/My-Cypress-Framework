

describe('Api Assertion', () => {
    
    it('assertion 1', () => {
        cy.request('https://jsonplaceholder.typicode.com/comments')
        .its('headers').its('content-type').should('include','application/json')
    });

    it.only('assertion 2', () => {
       cy.request({
        url : 'https://jsonplaceholder.typicode.com/comments',
        method: 'GET'
       }).its('headers').its('content-type').should('include','application/json')
        

    });
});