describe("Adicionar novas tarefas.cy", () => {
    
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5501/")   
    })

    it("Criar novas tarefas", () => {
        const tarefaAplicada = "Vitória Perdeu"

       
        cy.get('#todo_title').click().type(tarefaAplicada)
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("have.text", tarefaAplicada)
        cy.get('[x-text="todo.task"]').should("have.text", tarefaAplicada)

    })

    it("Criar novas tarefas com o Enter", () => {
        const tarefaAplicada2 = "Vitória Campeão"
    
        cy.get('#todo_title').click().type(tarefaAplicada2 + '{enter}')
        cy.get('[x-text="todo.task"]').should("have.text", tarefaAplicada2)
        cy.get('[x-text="todo.task"]').should("have.text", tarefaAplicada2)
    
    })
    
})