import styles from "./AddMeal.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";

const AddMeal = (props) => {
  const [validInp, updateValidInp] = useState(true);
  const inputVal = useRef();
  const onClickHandler = (event) => {
    if (validInp) {
      let mealDOMElement =
        event.target.parentElement.parentElement.firstElementChild;
      let id = mealDOMElement.id;
      let name = mealDOMElement.children[0].textContent;
      let price = mealDOMElement.children[2].textContent;
      let quantity = inputVal.current.value;
      let mealObj = {
        id: id,
        name: name,
        price: price,
        quantity: +quantity,
      };
      props.sendMeal(mealObj);
      inputVal.current.value = 1;
    }
  };

  const onChangeHandler = (event) => {
    let num = +event.target.value;
    if (num < 0 || !Number.isInteger(num)) {
      updateValidInp(false);
    } else {
      updateValidInp(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerInput}>
        <label htmlFor="number" className={styles.label}>
          Amount
        </label>
        <input
          ref={inputVal}
          id="number"
          type="number"
          defaultValue="1"
          min="1"
          max="10"
          onChange={onChangeHandler}
          className={!validInp ? styles.invalidInp : null}
        />
      </div>
      <Button onClick={onClickHandler}>+ Add</Button>
    </div>
  );
};

export default AddMeal;
