import { api } from ".";
import { showToast } from "../libs/toast";

export const getProducts = async ({ title = "", offset = 0, limit = 10 }) => {
    try {
        const res = await api.get(
            `products?offset=${offset}&limit=${limit}&title=${title}`
        );

        return res.data;
    } catch (error) {
        showToast(error.message);
        return [];
    }
};

/**
 * @typedef {Object} Product
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {string} categoryId
 * @property {string[]} images
 */

/**
 * @param {Product} productData
 */
export const addProduct = async (productData) => {
    try {
        await api.post("products", productData);
    } catch (error) {
        showToast(error.message);
    }
};

/**
 * @param {number} productId
 * @param {Product} patchData
 */
export const editProduct = async (productId, patchData) => {
    try {
        await api.put(`products/${productId}`, patchData);
    } catch (error) {
        showToast(error.message);
    }
};

/**
 * @param {number} productId
 */
export const removeProduct = async (productId) => {
    try {
        await api.delete(`products/${productId}`);
    } catch (error) {
        showToast(error.message);
    }
};
