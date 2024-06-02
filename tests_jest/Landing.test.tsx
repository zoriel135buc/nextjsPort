import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Landing from "@content/Landing";

describe("Landing", () => {
  test("renders the component", () => {
    render(<Landing />);
    const sectionElement = screen.getByTestId("Landing");
    expect(sectionElement).toBeInTheDocument();
  });

  it("renders the component", async () => {
    render(<Landing />);

    const readExperienceButton = screen.getByText(/repositories GitHub/i);
    const readCVButton = screen.getByText(/Visit my LinkedIn profile /i);

    expect(readExperienceButton).toBeInTheDocument();
    expect(readCVButton).toBeInTheDocument();
  });
});
