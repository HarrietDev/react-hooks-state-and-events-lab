import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, resetDarkMode] = useState(false);

  const appClass = darkMode ? "App dark" : "App light"

  const handleToggle = () => {
    resetDarkMode(prev => !prev)

  }
  // 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleToggle}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
