import { ITransaction } from "../model/transaction";

export function getTransaction(transactionId: string): Promise<ITransaction> {
  return new Promise((resolve, reject) => {
    fetch(`https://sandbox.wompi.co/v1/transactions/${transactionId}`, {
      method: "GET",
    })
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}
