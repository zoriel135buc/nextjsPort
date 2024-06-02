import "@testing-library/jest-dom";
import { useInView } from "react-intersection-observer";
import { render, screen } from "@testing-library/react";
import { useIsMobile } from "@functional/useIsMobile";
import Landing from "@content/Landing";

// Mocking dependencies
jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn().mockReturnValue([null, true]),
}));

describe("Landing", () => {
  test("renders the component", () => {
    render(<Landing />);
    const sectionElement = screen.getByTestId("Landing");
    expect(sectionElement).toBeInTheDocument();
  });

  it("renders buttons with correct content", async () => {
    render(<Landing />);

    // Using findByText for asynchronous content
    const readExperienceButton = await screen.findByText(
      /Latest work on GitHub/i
    );
    const readCVButton = await screen.findByText(/Visit my LinkedIn profile/i);
    const emailMeButton = await screen.findByText(/Email Me/i);

    expect(readExperienceButton).toBeInTheDocument();
    expect(readCVButton).toBeInTheDocument();
    expect(emailMeButton).toBeInTheDocument();
  });

  it("should test the email button", async () => {
    render(<Landing />);

    // Wait for the element to appear if necessary
    const emailMeButton = await screen.findByRole("link", { name: "Email Me" });
    expect(emailMeButton).toHaveAttribute("href", "mailto:scali0506@gmail.com");
  });
});
