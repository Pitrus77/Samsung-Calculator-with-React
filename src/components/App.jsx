import React, { useState } from "react";
import Display from "./display";
import Buttons from "./buttons";

function App() {
  const [inputedValues, setInputedValues] = useState("");
  const [answer, setAnswer] = useState(0);

  function updateDisplayValue(e) {
    setInputedValues(e.target.value);
    console.log(inputedValues);
    calculate();
  }

  function calculate() {
    try {
      // eslint-disable-next-line
      setAnswer(eval(inputedValues));
    } catch (error) {}
  }

  function takeValue(e) {
    const btnValue = e.target.value.toString();
    if (inputedValues === "") {
      if ("1234567890".indexOf(btnValue) !== -1) {
        // If what got passed in is a number:
        return setInputedValues(btnValue);
      }
    } else if (btnValue === "C") {
      setInputedValues("");
      setAnswer(0);
    } else {
      if (btnValue === "=") {
        calculate();
      } else {
        setInputedValues(
           btnValue
        );
        console.log(inputedValues);
      }
    }
  }

  return (
    <div className="root">
      <Display
        answer={answer}
        value={inputedValues}
        changed={updateDisplayValue}
      />
      <Buttons onclick={takeValue} />
    </div>
  );
}

export default App;
