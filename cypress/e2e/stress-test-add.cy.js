//Stress test för att se hur applikationen hanterar att man lägger till en vara 100 gånger i varukorgen
describe("Stress test: clicking the first item 100 times", () => {
  it("should add the first item 100 times and proceed to checkout", () => {
    cy.visit("/");
    cy.contains("Menu").click();
    cy.url().should("include", "/menu");
    //Lägg in den första varan i varukorgen 100 gånger
    for (let i = 0; i < 100; i++) {
      cy.get(".add-button").first().click();
      cy.wait(50);
    }

    //Testet misslyckas eftersom den tar en av varje och då det inte finns 100 stycken hittar den inte fler
    cy.get(".navbar-cart-icon").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.url().should("include", "/checkout");
    cy.contains("Total items: 100").should("exist");

    //Testet fungerar om man tar 10 istället för 100 på rad 8 och 17
    // men har fortfarande ett oönskat beteende eftersom den logiskt sett
    // bör välja den första varan "Mint Delight" istället för att ta en av varje
  });
});
