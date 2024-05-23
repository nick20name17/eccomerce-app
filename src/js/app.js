import { getProducts } from "./api/products";
import { handleProductActions, renderCards } from "./cards";
import {
  addProductFormHandler,
  editProductFormHandler,
  searchProductFormHandler,
} from "./form-handlers";

document.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  renderCards(products);

  handleProductActions();
  addProductFormHandler();
  editProductFormHandler();
  searchProductFormHandler();
});
