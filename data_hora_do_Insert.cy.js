describe("Data/Hora do Insert", () => {
    
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5501/")   
    })

    it("Exibir a data e hora ao cadastrar tarefa", () => {
        const tarefaAplicada = "Vitória Perdeu"

       
        cy.get('#todo_title').click().type(tarefaAplicada)
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("have.text", tarefaAplicada)
        cy.get('[x-text="getFormatedDate(todo.createdAt)"]'). should("not.be.empty")

    })



it("Exibir a data e hora ao cadastrar tarefa com o Enter", () => {
    const tarefaAplicada = "Vitória Campeão"

    cy.get('#todo_title').click().type(tarefaAplicada + '{enter}')
    cy.get('[x-text="todo.task"]').should("have.text", tarefaAplicada)
    cy.get('[x-text="getFormatedDate(todo.createdAt)"]'). should("not.be.empty")
    

    })

})