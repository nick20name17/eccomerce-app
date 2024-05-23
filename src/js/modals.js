export const deleteModalMarkup = (productTitle, productId) => {
  return `
    <button
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#deleteModal${productId}">
    <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M3 6H21"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    <path
        d="M19 6V20C19 21 18 22 17 22H7C6 22 5 21 5 20V6"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    <path
        d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
    </button>
    <div
    class="modal fade"
    id="deleteModal${productId}"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="deleteModalLabel">
                        Do you want to delete <span class="text-primary">${productTitle}<span/>?
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        <button
                            type="button"
                            class="btn btn-danger delete-btn"
                            id="${productId}">
                            Delete
                        </button>

                        <button
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
};

export const editModal = (defaultValues) => {
  return ` 
    <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#editModal${defaultValues.id}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
    
    <div
    class="modal fade"
    id="editModal${defaultValues.id}"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="editModalLabel">
                    Edit <span class="text-primary">${defaultValues.title}<span/>
                </h1>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="edit-product-form" data-product="${defaultValues.id}">
                    <div class="mb-3">
                        <label for="product-title" class="form-label"
                            >Product title</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="edit-product-title" />
                    </div>
                    <div class="mb-3">
                        <label for="product-descr" class="form-label"
                            >Product description</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="edit-product-descr" />
                    </div>
                    <div class="mb-3">
                        <label for="product-price" class="form-label"
                            >Product price</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="edit-product-price" />
                    </div>

                    <div class="mb-3">
                        <label for="product-category" class="form-label"
                            >Product category</label
                        >
                        <select
                            class="form-select"
                            id="edit-product-category">
                            <option value="2">Electronics</option>
                            <option value="3">Furniture</option>
                            <option value="4">Shoes</option>
                        </select>
                    </div>

                        <button type="submit" class="btn btn-primary">
                            Edit product
                        </button>
                        <button
                        type="button"
                        class="btn btn-outline-secondary"
                        data-bs-dismiss="modal"
                        aria-label="Close">
                        Close
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>`;
};
