import axios from "axios";

describe("Bookish application", () => {
  const gotoApp = () => {
    cy.visit("http://localhost:3000/");
  };

  beforeEach(() => {
    gotoApp();
  });

  const gotoNthBookInTheList = (number) => {
    cy.get("div.book-item").contains("View Details").eq(number).click();
    cy.url().should("include", `/books/${number + 1}`);
  };

  const checkAppTitle = () => {
    cy.get('h2[data-test="heading"]').contains("Bookish");
  };

  const checkBookDetail = (title) => {
    cy.get("h2.book-title").contains(title);
  };

  const checkBookListWith = (expectation = []) => {
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(expectation.length);

      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal(expectation);
    });
  };

  const performSearch = (keyWord) => {
    cy.get('[data-test="search"] input').type(keyWord);
  };

  it("Visits the bookish", function () {
    checkAppTitle();
  });

  it("Shows a book list", () => {
    checkBookListWith([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices",
      "Acceptance Test Driven Development with React",
    ]);
  });

  it("Goes to the detail page", () => {
    gotoNthBookInTheList(0);
    checkBookDetail("Refactoring");
  });

  it("Searches for a title", () => {
    checkBookListWith([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices",
      "Acceptance Test Driven Development with React",
    ]);
    performSearch("design");
    checkBookListWith(["Domain-driven design"]);
  });
});
