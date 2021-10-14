import styles from "./Card.module.css";
import React from "react";

const Card = React.forwardRef((props, ref) => {
  return (
    <ul ref={ref} className={`${styles.card} ${props.classMod}`}>
      {props.children}
    </ul>
  );
});

export default Card;
