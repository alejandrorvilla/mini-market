import { IProduct } from "../../model/product";
import { data } from "./data";

export function getProducts(): Promise<Array<IProduct>> {
  return new Promise((resolve) => {
    resolve(data);
  });
}
