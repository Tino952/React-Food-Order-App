import React from "react";
import styles from "./CartModal.module.css";
import Card from "../UI/Card";
import CardElement from "../UI/CardElement";
import Button from "../UI/Button";
import CartContext from "../../context/CartStatus";
import { useContext } from "react";
import reactDom from "react-dom";
import { useRef, useImperativeHandle } from "react";

const CartModal = React.forwardRef((props, ref) => {
  const ctx = useContext(CartContext);
  const updateByOneHandler = (boolean) => {
    return (event) => {
      let mealId = event.target.parentElement.parentElement.id;
      ctx.updateByOne(mealId, boolean);
    };
  };

  const orderHandler = () => {
    console.log("ordering...");
  };

  const onClickHandler = () => {
    ctx.openModal(false);
  };

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={onClickHandler}></div>;
  };

  const modalRef = useRef();

  const bringIntoView = () => {
    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useImperativeHandle(ref, () => {
    return {
      intoView: bringIntoView,
    };
  });

  return (
    <div>
      {ctx.cart > 0 ? (
        <React.Fragment>
          {reactDom.createPortal(
            <Backdrop />,
            document.getElementById("backdrop-root")
          )}
          <Card classMod={styles.modal} ref={modalRef}>
            {ctx.items.map((meal) => (
              <CardElement key={meal.id} id={meal.id}>
                <div className={styles.container}>
                  <span className={styles.title}>{meal.name}</span>
                  <div>
                    <span className={styles.price}>{meal.price}</span>
                    <span className={styles.quantity}>
                      <b>x</b> {meal.quantity}
                    </span>
                  </div>
                </div>
                <div className={styles.modify}>
                  <Button
                    onClick={updateByOneHandler(false)}
                    classMod={styles.button}
                  >
                    -
                  </Button>
                  <Button
                    onClick={updateByOneHandler(true)}
                    classMod={styles.button}
                  >
                    +
                  </Button>
                </div>
              </CardElement>
            ))}
            <div className={styles.actions}>
              <Button classMod={styles.orderButton} onClick={orderHandler}>
                Order
              </Button>
              <Button classMod={styles.closeButton} onClick={props.closeModal}>
                Close
              </Button>
            </div>
          </Card>
        </React.Fragment>
      ) : null}
    </div>
  );
});

export default CartModal;
