import { render, screen } from "@testing-library/react";
import ShoppingCartButton from "../../../components/cart/ShoppingCartButton";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { store } from "../../../store";
import Utilities from "../../../utilities/Utilities";

describe("Tests ShoppingCartButton Component", () => {
  it("Case 1: Active style", () => {
    render(
      <Provider store={store}>
        <ShoppingCartButton total={0} />
      </Provider>
    );
    const cartBtn = screen.getByTestId("cart-btn");
    expect(cartBtn.firstChild).not.toHaveClass("active");
    userEvent.click(cartBtn);
    expect(cartBtn.firstChild).toHaveClass("active");
    userEvent.click(cartBtn);
    expect(cartBtn.firstChild).not.toHaveClass("active");
  });
  it("Case 2: to Pay", () => {
    const total = 24500;
    render(
      <Provider store={store}>
        <ShoppingCartButton total={total} />
      </Provider>
    );
    const format = Utilities.formatPrice(total).replace("$", "");
    const toPay = screen.getByText(new RegExp(format, "i"));
    expect(toPay).toBeInTheDocument();
  });
});
