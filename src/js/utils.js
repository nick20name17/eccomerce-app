export const trunc = (text, maxLenght) =>
  text?.length > maxLenght ? text?.substring(0, maxLenght - 3) + "..." : text;

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
