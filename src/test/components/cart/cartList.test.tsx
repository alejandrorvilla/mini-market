import { render, screen } from "@testing-library/react";
import CartList from "../../../components/cart/CartList";
import Utilities from "../../../utilities/Utilities";

describe("Tests CartList Component", () => {
  it("Case 1: products empty", () => {
    render(<CartList products={[]} total={0} />);
    const emptyText = screen.getByText(/Please add a product in the cart./i);
    const totalizer = screen.getByText(/Total:/i);
    expect(emptyText).toBeInTheDocument();
    expect(totalizer).toBeInTheDocument();
  });
  it("Case 2: with products", () => {
    render(
      <CartList
        products={[
          {
            name: "product test",
            image: "url-test",
            price: 12000,
            productId: 1,
            quantity: 2,
          },
        ]}
        total={24000}
      />
    );
    const emptyText = screen.queryByText(/Please add a product in the cart./i);
    const imageProduct = screen.getByAltText(/product test/i);
    const counter = screen.getByText(2);
    const total = Utilities.formatPrice(24000).replace("$", "");
    const totalizer = screen.getByText(new RegExp(total, "i"));

    expect(emptyText).toBeNull();
    expect(totalizer).toBeInTheDocument();
    expect(imageProduct).toBeInTheDocument();
    expect(counter).toBeInTheDocument();
  });
});
