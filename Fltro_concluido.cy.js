describe("Marcar tarefa como concluida.cy", () => {
    
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5501/")   
    })

    it("Filtrar Tarefas Concluída ", () => {
        const tarefaAplicada = "Vitória Perdeu"
        const tarefaAplicada2 = "Vitória Campeão"

       
        cy.get('#todo_title').click().type(tarefaAplicada)
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.wait(500);
        cy.get('[x-text="todo.task"]').last().should("have.text", tarefaAplicada)
     

        cy.get('#todo_title').click().type(tarefaAplicada2)
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.wait(500);
        cy.get('[x-text="todo.task"]').last().should("have.text", tarefaAplicada2)
        cy.get(':nth-child(3) > :nth-child(1) > .form-check-input').click()
        cy.get('select').select('Concluídos')
    })
    // Teste realizado com a tarefas sendo criada com a telca "Enter"
    it("Filtrar Tarefas Concluídas ", () => {
        const tarefaAplicada = "Vitória Perdeu"
        const tarefaAplicada2 = "Vitória Campeão"

       
        cy.get('#todo_title').click().type(tarefaAplicada + '{enter}')
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.wait(500);
        cy.get('[x-text="todo.task"]').last().should("have.text", tarefaAplicada)
     

        cy.get('#todo_title').click().type(tarefaAplicada2 + '{enter}')
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.wait(500);
        cy.get('[x-text="todo.task"]').last().should("have.text", tarefaAplicada2)
        cy.get(':nth-child(3) > :nth-child(1) > .form-check-input').click()
        cy.get('select').select('Concluídos')
    })
    
})