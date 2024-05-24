import { Header } from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test Header component", () => {
  it("Renders logo link", () => {
    render(<Header />);
    const logoLink = screen.getByTestId("LogoLink");
    expect(logoLink).toBeInTheDocument();
  });

  it("Renders favorites link", () => {
    render(<Header />);
    const favoritesLink = screen.getByTestId("FavoritesLink");
    expect(favoritesLink).toBeInTheDocument();
  });
});
