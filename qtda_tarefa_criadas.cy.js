describe("Quantidade de Tarefas Criadas", () => {
    
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5501/")   
    })

    it("Exibir a quantidade de Tarefas Criadas", () => {
        const tarefaAplicada1 = "Vitória Campeão"
    	const tarefaAplicada2 = "Vitória perdeu"

       
        cy.get('#todo_title').click().type(tarefaAplicada1)
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.wait(500);
        cy.get('[x-text="todo.task"]').should("have.text", tarefaAplicada1)
        
        cy.get('#todo_title').click().type(tarefaAplicada2)
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.wait(500);
        cy.get('[x-text="todo.task"]').last().should("have.text", tarefaAplicada2)

	cy.get('.mb-3').should("have.text", "Tarefas cadastradas: 2")
    })
    
})