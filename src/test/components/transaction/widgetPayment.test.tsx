import { render, screen, waitFor } from "@testing-library/react";
import WidgetPayment from "../../../components/transaction/WidgetPayment";

describe("Tests WidgetPayment Component", () => {
  it("Case 1: Without to pay not paint button", async () => {
    render(<WidgetPayment total={0} />);
    await waitFor(() => {
      const button = screen.queryByText(/Paga con/i);
      expect(button).toBeNull();
    });
  });
  it("Case 1: With to pay", async () => {
    render(<WidgetPayment total={10000} />);
    await waitFor(() => {
      const button = screen.findByText(/Paga con/i);
      /*expect(button).toBeInTheDocument(); ¿como cargar el script?*/
    });
  });
});
