const localStorageName = "cartPepe";

export const getProducts = () =>
  JSON.parse(localStorage.getItem(localStorageName)) || [];

export const addNewProduct = (id) => {
  const products = getProducts();

  const productExist = products.find((it) => +it.id === +id);

  if (productExist) {
    return deleteNewProduct(productExist.id);
  }
  alert("Added product in the cart");
  const newProduct = [{ id, quantity: 1 }, ...products];
  return localStorage.setItem(localStorageName, JSON.stringify(newProduct));
};

export const deleteNewProduct = (id) => {
  const products = getProducts();
  const newProducts = products.filter((it) => +it.id !== +id) || [];
  alert("Removed product in the cart");
  return localStorage.setItem(localStorageName, JSON.stringify(newProducts));
};

export const sumProductItem = (id) => {
  const products = getProducts();

  const newProducts = products.map((it) => {
    if (+it.id === +id) {
      return { quantity: +it.quantity + 1, id };
    }
    return it;
  });

  return localStorage.setItem(localStorageName, JSON.stringify(newProducts));
};

export const substProductItem = (id) => {
  const products = getProducts();

  const newProducts = products.map((it) => {
    if (+it.id === +id) {
      return {
        quantity: +it.quantity === 1 ? 1 : +it.quantity - 1,
        id,
      };
    }
    return it;
  });

  return localStorage.setItem(localStorageName, JSON.stringify(newProducts));
};

export const cleanCart = () => {
  return localStorage.removeItem(localStorageName);
};
