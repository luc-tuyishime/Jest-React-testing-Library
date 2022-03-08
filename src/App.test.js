import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has initial color", () => {
  render(<App />);

  // find an element of role button and text of 'Change to Blue'
  const colorButton = screen.getByRole("button", { name: "Change To blue" });

  // expect the color button to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click Button
  fireEvent.click(colorButton);

  // expect to have a backgroundColor of blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change To red");
});

test("Button has correct initial text", () => {});

test("button turn blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change To blue" });
});
