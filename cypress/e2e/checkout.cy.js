//Testa så att att det går att lägga in en vara i varukorgen och gå till checkout-sidan
describe("E2E Example", () => {
  it("should add an item to the cart and check out", () => {
    cy.visit("/");
    cy.contains("Menu").click();

    //Lägg in den första varan som laddas in i varukorgen
    cy.get(".add-button").first().click();

    //Gå till varukorgen
    cy.get(".navbar").click();
    cy.get(".navbar-cart-icon").click();

    //Checka ut
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.url().should("include", "/checkout");
  });
});
