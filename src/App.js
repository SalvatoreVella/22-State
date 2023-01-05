import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <Counter 
    initialValue = {13}
    increment = {2}
    interval = {500}
    />
  );
}

export default App;
