import styles from "./Meal.module.css";

const Meal = (props) => {
  return (
    <div className={styles.container} id={props.id}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>${props.price}</div>
    </div>
  );
};

export default Meal;
