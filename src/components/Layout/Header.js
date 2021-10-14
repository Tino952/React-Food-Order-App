import react from "react";
import CartHeader from "../Cart/CartHeader";
import styles from "./Header.module.css";
import MealsImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <react.Fragment>
      <header className={styles.header}>
        <h2>ReactMeals</h2>
        <CartHeader />
      </header>
      <div className={styles.image}>
        <img src={MealsImage} alt="A table full of delicous food" />
      </div>
    </react.Fragment>
  );
};

export default Header;
