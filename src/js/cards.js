import { removeProduct } from "./api/products";
import { deleteModalMarkup, editModal } from "./modals";
import { trunc } from "./utils";

export const renderCards = (products) => {
  const cardList = document.querySelector("#card-list");
  cardList.innerHTML = "";

  products.forEach((product) => {
    const cardHTML = ` 
            <div class="card" style="width: 18rem;">
                <img src="${product.images[0]}" class="card-img-top" alt="${
      product.title
    }" />
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">
                       ${trunc(product.description, 100)} 
                    </p>
                    <p class="card-text font-weight-bold">
                       ${product.price} $
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    ${deleteModalMarkup(product.title, product.id)}
                    ${editModal(product)}
                </div>
            </div>`;

    cardList.insertAdjacentHTML("beforeend", cardHTML);
  });
};

export const handleProductActions = () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const productId = btn.id;
      await removeProduct(productId);
      btn.closest(".card").remove();
      document.querySelector(".modal-backdrop").remove();
      document.body.style = "";
    });
  });
};
