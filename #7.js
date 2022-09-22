function contains(store, product) {
  const iterateStore = (store) =>
    typeof store === "string"
      ? store
      : Object.values(store).map(iterateStore).flat();

  const stock = iterateStore(store);
  // console.log(stock);
  return stock.includes(product);
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta",
    },
  },
};

console.log(contains(almacen, "camiseta"));
