import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("Navigation Bar Component", () => {
  function renderNavBar() {
    render(<NavBar />, { wrapper: MemoryRouter });
  }

  test("render links", () => {
    renderNavBar();
  });
});
