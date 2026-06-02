import Header from "../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/UserContext";

test("should load Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Ganesh" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>,
  );

  const heading = screen.getByRole("button");

  expect(heading).toBeInTheDocument();
});
