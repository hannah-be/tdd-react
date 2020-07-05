import React from "react";
import { render } from "@testing-library/react";

import BookDetail from "./BookDetail";

describe("BookDetail", () => {
  it("renders title", () => {
    const props = {
      book: {
        name: "Refactoring",
      },
    };

    const { container } = render(<BookDetail {...props} />);

    const title = container.querySelector(".book-title");
    expect(title.innerHTML).toEqual(props.book.name);
  });

  it("renders description", () => {
    const props = {
      book: {
        name: "Refactoring",
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.",
      },
    };

    const { container } = render(<BookDetail {...props} />);

    const description = container.querySelector("p.book-description");
    expect(description.innerHTML).toEqual(props.book.description);
  });

  it("displays the book name when no description is given", () => {
    const props = {
      book: {
        name: "Refactoring",
      },
    };
    const { container } = render(<BookDetail {...props} />);

    const description = container.querySelector("p.book-description");
    expect(description.innerHTML).toEqual(props.book.name);
  });

  it("Shows *more* link when description is too long", () => {
    const props = {
      book: {
        name: "Refactoring",
        description: "Refactoring is a controlled technique for improving the design of an existing code base. Its essence is applying a series of small behavior-preserving transformations, each of which 'too small to be worth doing'. However the cumulative effect of each of these transformations is quite significant. By doing them in small steps you reduce the risk of introducing errors.",
      },
    };

    const { container } = render(<BookDetail {...props} />);

    const link = container.querySelector("a.show-more");
    const title = container.querySelector("p.book-description");

    expect(link.innerHTML).toEqual("Show more");
    expect(title.innerHTML).toEqual(
      "Refactoring is a controlled technique for improving the design of an existing code base. Its essence is applying a series of small behavior-preserving transformations, each of which 'too small to be worth doing'. However the cumulative effect of each of these transformations is quite significant. By ...."
    );
  });
});
