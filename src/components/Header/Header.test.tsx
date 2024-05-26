import { Header } from "./Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Test Header component", () => {
  it("Renders logo link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const logoLink = screen.getByTestId("headerLogoLink");
    expect(logoLink).toBeInTheDocument();
  });

  it("Renders favorites link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const favoritesLink = screen.getByTestId("favoritesLink");
    expect(favoritesLink).toBeInTheDocument();
  });

  // it("Not renders home link", () => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>,
  //   );

  //   window.location.pathname = "/";

  //   screen.findByTestId("homeLink").then((homeLink) => {
  //     expect(homeLink).not.toBeInTheDocument();
  //   });
  // });

  // it("Renders home link", () => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>,
  //   );

  //   jest.mock("useLocation", () => {
  //     return "/some";
  //   });

  //   console.log(window.location.pathname);

  //   const homeLink = screen.queryByTestId("homeLink");

  //   if (!homeLink) expect(false).toBe(true);

  //   expect(homeLink).toBeInTheDocument();
  // });
});
