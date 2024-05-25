import { Footer } from "./Footer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test Footer component", () => {
  it("Renders logo link", () => {
    render(<Footer />);
    const logoLink = screen.getByTestId("footerLogoLink");
    expect(logoLink).toBeInTheDocument();
  });

  it("Renders modsen link", () => {
    render(<Footer />);
    const favoritesLink = screen.getByTestId("modsenLogoLink");
    expect(favoritesLink).toBeInTheDocument();
  });
});
