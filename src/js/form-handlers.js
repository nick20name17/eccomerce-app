import { addProduct, editProduct, getProducts } from "./api/products";
import { renderCards } from "./cards";
import { debounce } from "./utils";

export const addProductFormHandler = () => {
    const addProductForm = document.querySelector("#add-product-form");

    addProductForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = document.querySelector("#product-title").value;
        const description = document.querySelector("#product-descr").value;
        const price = +document.querySelector("#product-price").value;
        const categoryId = +document.querySelector("#product-category").value;

        const productToAdd = {
            title,
            description,
            price,
            categoryId,
            images: ["https://placeimg.com/640/480/any"],
        };

        await addProduct(productToAdd).then((data) => renderCards(data));
    });
};

export const editProductFormHandler = () => {
    const editProductForms = document.querySelectorAll("#edit-product-form");
    editProductForms.forEach((editProductForm) => {
        editProductForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const title = document.querySelector("#edit-product-title").value;
            const description = document.querySelector(
                "#edit-product-descr"
            ).value;
            const price = +document.querySelector("#edit-product-price").value;
            const categoryId = +document.querySelector("#edit-product-category")
                .value;

            const productToEdit = {
                title,
                description,
                price,
                categoryId,
                images: ["https://placeimg.com/640/480/any"],
            };

            await editProduct(
                editProductForm.dataset.product,
                productToEdit
            ).then((data) => renderCards(data));
        });
    });
};

export const searchProductFormHandler = async () => {
    const searchInput = document.querySelector("#search");

    const debouncedGetProducts = debounce(
        async (searchTerm) =>
            await getProducts(searchTerm).then((data) => renderCards(data))
    );

    searchInput.addEventListener("input", async (e) => {
        const searchTerm = e.target.value;
        debouncedGetProducts(searchTerm);
    });
};
