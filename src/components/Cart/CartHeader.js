import styles from "./CartHeader.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../context/CartStatus";
import { useContext, useEffect, useState, useRef } from "react";

const CartHeader = () => {
  const ctx = useContext(CartContext);
  const [inputChange, updateInputChange] = useState(false);
  // using initialRender ref to prevent useEffect firing on first render
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      updateInputChange(true);
      setTimeout(() => {
        updateInputChange(false);
      }, 300);
    }
  }, [ctx.cart, initialRender]);

  const onClickHandler = () => {
    ctx.openModal(true);
  };

  return (
    <button
      onClick={onClickHandler}
      className={`${styles.container} ${inputChange ? styles.bump : null}`}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.quantity}>{ctx.cart}</span>
    </button>
  );
};

export default CartHeader;
