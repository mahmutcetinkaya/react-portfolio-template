import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { portfolioData } from "./data/portfolio";

test("renders hero and core sections", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: portfolioData.hero.name })
  ).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /projeler/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /deneyim & eğitim/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "İletişim" })).toBeInTheDocument();
});
