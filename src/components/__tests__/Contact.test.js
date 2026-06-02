import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load Contact us Component", () => {
  render(<Contact/>);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
})