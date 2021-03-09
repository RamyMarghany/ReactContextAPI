import React, { useState } from "react";

// Create a product context with initial state is product with an empty array
export const ProductContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFav = (id) => {
    const selectedId = productsList.findIndex((p) => p.id === id);
    const newFavState = !productsList[selectedId].isFavorite;
    const updatedList = [...productsList];
    updatedList[selectedId] = {
      ...productsList[selectedId],
      isFavorite: newFavState,
    };
    setProductsList(updatedList);
    return productsList;
  };

  return (
    // whenever the state is updated here, the context will get a new value, and each child is listening for this context will get that new value
    <ProductContext.Provider
      value={{ products: productsList, toggleFav: toggleFav }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
