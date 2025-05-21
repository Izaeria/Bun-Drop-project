//Kolla så att allt på Homepage visas korrekt
describe("Homepage", () => {
  it("should visit the homepage and check for content", () => {
    cy.visit("/");
    cy.contains("Home").should("exist");
    cy.contains("Menu").should("exist");
    cy.contains("about us").should("exist");
    cy.contains("contact").should("exist");
    cy.contains("WE DROP IT LIKE IT’S HOT").should("exist");
    cy.contains("THE ULTIMATE").should("exist");
    cy.contains("MOUNT BURGEREST").should("exist");
    cy.contains("OREO MILKSHAKE").should("exist");
    cy.contains("BLACKBURGER").should("exist");
    cy.contains("VIEW THE MENU").should("exist");
  });
});
