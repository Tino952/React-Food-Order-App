import React from "react";
import { useState } from "react";

const CartContext = React.createContext({
  cart: 0,
  items: [],
  modal: null,
  updateItems: () => {},
  updateByOne: () => {},
  openModal: null,
});

let count = 0;

export const CartContextProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [modal, updateModal] = useState(false);

  const updateItemsHandler = (item) => {
    let existingItem = items.find((element) => element.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
      updateItems((prevItems) => {
        return [...prevItems];
      });
    } else {
      updateItems((prevItems) => {
        return [...prevItems, item];
      });
    }
    count += item.quantity;
  };

  const updateByOneHandler = (id, boolean) => {
    let findItem = items.find((element) => element.id === id);
    if (boolean) {
      findItem.quantity++;
      count++;
    }
    if (!boolean && findItem.quantity > 0) {
      findItem.quantity--;
      count--;
    }
    if (findItem.quantity === 0) {
      updateItems((prevItems) => {
        return prevItems.filter((element) => element.id !== findItem.id);
      });
    }
    updateItems((prevItems) => {
      return [...prevItems];
    });
  };

  const openModalHandler = (boolean) => {
    updateModal(boolean);
  };

  return (
    <CartContext.Provider
      value={{
        cart: count,
        items: items,
        modal: modal,
        updateItems: updateItemsHandler,
        updateByOne: updateByOneHandler,
        openModal: openModalHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
