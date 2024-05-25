import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./App";

test("renders App", () => {
  render(<App />);
  const mainText = screen.getByText(/App Text/i);
  expect(mainText).toBeInTheDocument();
});
