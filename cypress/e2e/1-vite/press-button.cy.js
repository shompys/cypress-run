describe('main', () => {
    before(() => {
        cy.visit('http://localhost:8080/')
    })
    it('press the button 6 times and you must have the text with the quantity', () => {
        cy.get('button').dblclick().dblclick().dblclick().should('have.text', 'count is 6')
        
    })
})