

class FoodTruckPage {

    addReview(review) {
        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`)
            .click({force: true})
        cy.contains('button', 'Enviar avaliação').click()
    }

    userInfoReview(user) {
        cy.contains('.details', user.name)
            .should('be.visible')        

        cy.contains('.details', user.instagram)
            .should('be.visible')
        
    }

    userReview(review) {
        cy.contains('.comment', review.comment)
            .should('be.visible')        

        cy.get('.user .stars')
          .find('svg')
          .should('have.length',review.stars)
    }

}

export default new FoodTruckPage()