//Stress test för att se hur och om det går att lägga till ett specifikt menu-item 100 gånger och checka ut
describe("Stress test: navigating to the menu, sides then click Strawberry Milkshake 100 times", () => {
  it("should add 'Strawberry Milkshake' 100 times and proceed to checkout", () => {
    cy.visit("/");

    //Gå till meny-sidan och klicka på "Drinks", hitta "Strawberry Milkshake" och lägg i varukorgen 100 gånger
    cy.contains("Menu").click();
    cy.url().should("include", "/menu");
    cy.contains("Drinks").click();

    //Timeout eftersom testet misslyckades de första gångerna på grund av att datan ej hann läsas in
    cy.contains(".food-item-list", "Strawberry Milkshake", {
      timeout: 10000,
    }).as("strawberryMilkshakeCard");
    cy.get("@strawberryMilkshakeCard").find(".add-button").click();

    //Lägg till 100 gånger
    for (let i = 0; i < 99; i++) {
      cy.get("@strawberryMilkshakeCard").find(".add").click();
      cy.wait(10);
    }
    //Gå till varukorgen, kolla om "Strawberry Milkshake" finns 100 gånger och gå vidare till checkout
    cy.get(".navbar-cart-icon").click();
    cy.contains("Strawberry Milkshake").should("exist");
    cy.contains("100").should("exist");
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.url().should("include", "/checkout");
  });
});
