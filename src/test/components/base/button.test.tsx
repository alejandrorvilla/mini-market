import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Button from "../../../components/base/Button";

describe("Tests Button Component", () => {
  it("Case 1: Test add className", () => {
    render(
      <Button className="class-test" onClick={() => {}}>
        Test
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("class-test");
  });
  it("Case 2: Test disabled property", () => {
    render(
      <Button disabled={true} onClick={() => {}}>
        Test disabled
      </Button>
    );
    let button = screen.getByText(/Test disabled/i);
    expect(button).toBeDisabled();

    render(
      <Button disabled={false} onClick={() => {}}>
        Test enabled
      </Button>
    );
    button = screen.getByText(/Test enabled/i);
    expect(button).toBeEnabled();
  });
  it("Case 3: Test click", () => {
    const callBack = jest.fn();
    render(<Button onClick={callBack}>Test</Button>);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(callBack).toHaveBeenCalledTimes(1);
  });
  it("Case 4: Test mode property", () => {
    render(
      <Button mode="gray" onClick={() => {}}>
        Test mode
      </Button>
    );
    let button = screen.getByText(/Test mode/i);
    expect(button).toHaveClass("gray");

    render(<Button onClick={() => {}}>Test mode purple</Button>);
    button = screen.getByText(/Test mode purple/i);
    expect(button).toHaveClass("purple");
  });
});
