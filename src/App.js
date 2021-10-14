import React from "react";
import Header from "./components/Layout/Header";
import MealList from "./components/Meals/MealList";
import MealsSummary from "./components/Meals/MealsSummary";
import { CartContextProvider } from "./context/CartStatus";

function App() {
  return (
    <CartContextProvider>
      <Header></Header>
      <MealsSummary />
      <MealList />
    </CartContextProvider>
  );
}

export default App;
