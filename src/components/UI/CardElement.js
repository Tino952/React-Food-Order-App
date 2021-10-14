import styles from "./CardElement.module.css";

const CardElement = (props) => {
  return (
    <li className={styles.listElement} id={props.id}>
      {props.children}
    </li>
  );
};
export default CardElement;
