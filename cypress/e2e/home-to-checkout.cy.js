//Gå igenom hela användarflödet från homepage till confirmation
describe("BBD home to checkout test", () => {
  it("should go through the whole user flow from homepage to checkout", () => {
    //Börjar med att gå till home-page
    cy.visit("/");

    //Gå till meny-sidan, klicka på ''Dressings'' och klicka på "Ketchup"
    cy.contains("Menu").click();
    cy.url().should("include", "/menu");
    cy.contains("Dressings").click();
    cy.contains(".food-item-list", "Ketchup", { timeout: 10000 }).as(
      "ketchupCard"
    );

    //Lägg till "Ketchup" i varukorgen och klicka på den
    cy.get("@ketchupCard").find(".add-button").click();
    cy.get(".navbar-cart-icon").click();

    //Om "Ketchup" existerar, klicka på "Proceed to Checkout"
    cy.contains("Ketchup").should("exist");
    cy.contains("1").should("exist");
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.url().should("include", "/checkout");
    //Det här testet kan gå vidare oavsett om quantity är mer än 1 då det kan finnas fler element på sidan som den kollar efter och den kollar inte specifikt efter 1 i quantity

    //På checkout: lägg in data i alla fält
    cy.get('input[placeholder="First Name"]').type("John");
    cy.get('input[placeholder="Last Name"]').type("Doe");
    cy.get('input[placeholder="Email Address"]').type("johndoe@example.com");
    cy.get('input[placeholder="Phone Number"]').type("1234567890");
    cy.get('input[placeholder="Address"]').type("Gatan 12");
    cy.get('input[placeholder="City"]').type("Malmö");
    cy.get('input[placeholder="Postal Code"]').type("12345");
    cy.get('input[placeholder="Card Number"]').type("4111111111111111");
    cy.get('input[placeholder="Exp Date (MM/YY)"]').type("12/25");
    cy.get('input[placeholder="CVC"]').type("123");

    //Checka ut och gå till Confirmation
    cy.get(".place-order .checkout-button", { timeout: 10000 })
      .should("be.visible")
      .and("not.be.disabled")
      .click();
    cy.url().should("include", "/confirmation");
  });
});
