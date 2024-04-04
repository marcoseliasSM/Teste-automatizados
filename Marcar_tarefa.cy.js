describe("Marcar tarefa como concluida.cy", () => {
    
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5501/")   
    })

    it("Marcar tarefa", () => {
        const tarefaAplicada = "Vitória Perdeu"

       
        cy.get('#todo_title').click().type(tarefaAplicada)
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("have.text", tarefaAplicada)
        cy.get('.form-check-input').click()

    })
    // Teste realizado com a tarefas sendo criada com a telca "Enter"
    it("Criar novas tarefas com o Enter", () => {
        const tarefaAplicada2 = "Vitória Campeão"
    
        cy.get('#todo_title').click().type(tarefaAplicada2 + '{enter}')
        cy.get('[x-text="todo.task"]').should("have.text", tarefaAplicada2)
        cy.get('.form-check-input').click() 
    })
    
})
