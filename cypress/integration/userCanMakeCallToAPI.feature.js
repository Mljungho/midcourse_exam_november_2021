describe("Display list of user", () => {
  before(() => {
    cy.intercept("GET", "https://api.github.com/users/**", {
      fixture: "fixtureWithRealResponse.json",
    });
    cy.visit("/");
    cy.get("[data-cy=input_search]").type("Mljungho")
    cy.get("[cy-data=search_btn]").click()
  });

  it("is expected to find user Mljungho", () => {
   
  }) 
});
