describe("Carregamento da aplicação", () => {

    it("Deve ser possivel carregar a aplicação", () => {
        cy.visit("http://127.0.0.1:5501/")
        cy.get('h1').should("have.text", "O que fazer hoje?")


    })


})