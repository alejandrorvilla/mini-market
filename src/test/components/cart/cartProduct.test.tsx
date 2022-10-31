import { render, screen } from "@testing-library/react";
import CartProduct from "../../../components/cart/CartProduct";

test("Test CartProduct Component: Paint product elements", () => {
  render(
    <CartProduct
      product={{
        productId: 1,
        image: "url",
        price: 2500,
        quantity: 5,
        name: "Test product",
      }}
    />
  );
  const counter = screen.getByText(/5/i);
  const image = screen.getByAltText(/Test product/i);
  expect(counter).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
