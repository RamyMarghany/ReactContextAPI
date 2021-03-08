import React, { useState } from "react";

// Create a product context with initial state is product with an empty array
export const ProductContext = React.createContext({ products: [] });

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

  return (
    // whenever the state is updated here, the context will get a new value, and each child is listening for this context will get that new value
    <ProductContext.Provider value={{ products: productsList }}>
      {props.children}
    </ProductContext.Provider>
  );
};
