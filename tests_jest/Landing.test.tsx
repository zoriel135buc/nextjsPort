import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Landing from "@content/Landing";

describe("Landing", () => {
  test("renders the component", () => {
    render(<Landing />);
    const sectionElement = screen.getByTestId("Landing");
    expect(sectionElement).toBeInTheDocument();
  });

  it("renders buttons with correct content", async () => {
    render(<Landing />);

    const readExperienceButton = screen.getByRole("button", {
      name: /Latest work on GitHub/i,
    });
    const readCVButton = screen.getByRole("button", {
      name: /Visit my LinkedIn profile/i,
    });

    expect(readExperienceButton).toBeInTheDocument();
    expect(readCVButton).toBeInTheDocument();
  });

  it("should test the email button", async () => {
    render(<Landing />);

    const emailMeButton = screen.getByRole("link", { name: /Email Me/i });
    expect(emailMeButton).toHaveAttribute(
      "href",
      "mailto:zorielbuc135@gmail.com"
    );
  });
});
