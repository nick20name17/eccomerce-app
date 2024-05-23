import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showToast = (text) =>
  Toastify({
    text,
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
  }).showToast();
