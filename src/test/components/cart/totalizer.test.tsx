import { render, screen } from "@testing-library/react";
import Totalizer from "../../../components/cart/Totalizer";
import Utilities from "../../../utilities/Utilities";

describe("Tests Totalizer Component", () => {
  it("Case 1: Total 0", () => {
    const total = Utilities.formatPrice(0);
    render(<Totalizer total={total} />);
    const label = screen.getByText(/Total:/i);
    const toPay = screen.getByText(new RegExp(total.replace("$", ""), "i"));
    expect(label).toBeInTheDocument();
    expect(toPay).toBeInTheDocument();
  });
  it("Case 1: Total 35.450", () => {
    const total = Utilities.formatPrice(35450);
    render(<Totalizer total={total} />);
    const label = screen.getByText(/Total:/i);
    const toPay = screen.getByText(new RegExp(total.replace("$", ""), "i"));
    expect(label).toBeInTheDocument();
    expect(toPay).toBeInTheDocument();
  });
});
