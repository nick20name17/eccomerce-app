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
            await getProducts({ title: searchTerm }).then((data) =>
                renderCards(data)
            )
    );

    searchInput.addEventListener("input", async (e) => {
        const searchTerm = e.target.value;
        debouncedGetProducts(searchTerm);
    });
};

export const paginationHandler = () => {
    const btnPrev = document.querySelector("#btn-prev");
    const btnNext = document.querySelector("#btn-next");
    const paginationList = document.querySelector("#pagination-list");

    let currentPage = 0;
    let currentLimit = 10;
    let totalPages = 10;

    const renderPaginationItems = () => {
        paginationList.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const paginationButton = document.createElement("li");
            paginationButton.innerHTML = `<a class="page-link" href="#">${i}</a>`;

            paginationButton.addEventListener("click", async () => {
                currentPage = i;
                const products = await getProducts({
                    offset: currentPage * currentLimit,
                    limit: currentLimit,
                });
                renderCards(products);
            });

            paginationList.insertAdjacentElement("beforeend", paginationButton);
        }
    };

    btnPrev.addEventListener("click", async () => {
        if (currentPage > 0) {
            currentPage--;
            const products = await getProducts({
                offset: currentPage * currentLimit,
                limit: currentLimit,
            });
            renderCards(products);
        }
    });

    btnNext.addEventListener("click", async () => {
        if (currentPage < totalPages) {
            currentPage++;
            const products = await getProducts({
                offset: currentPage * currentLimit,
                limit: currentLimit,
            });
            renderCards(products);
        }
    });

    renderPaginationItems();
};
