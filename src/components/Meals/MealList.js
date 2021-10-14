import React from "react";
import Meal from "./Meal";
import AddMeal from "./AddMeal";
import CartContext from "../../context/CartStatus";
import { useContext, useRef } from "react";
import CartModal from "../Cart/CartModal";
import Card from "../UI/Card";
import CardElement from "../UI/CardElement";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealList = () => {
  const ctx = useContext(CartContext);

  const sendMealHandler = (item) => {
    ctx.updateItems(item);
    ctx.openModal(true);
  };

  const closeModalHandler = () => {
    ctx.openModal(false);
  };

  const modalRef = useRef();

  if (ctx.modal) {
    setTimeout(() => {
      modalRef.current.intoView();
    }, 200);
  }
  return (
    <React.Fragment>
      <Card>
        {DUMMY_MEALS.map((meal) => (
          <CardElement key={meal.id}>
            <Meal
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
            <AddMeal sendMeal={sendMealHandler} />
          </CardElement>
        ))}
      </Card>
      {ctx.modal ? (
        <CartModal ref={modalRef} closeModal={closeModalHandler} />
      ) : null}
    </React.Fragment>
  );
};

export default MealList;
