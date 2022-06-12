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
      if ("1234567890".indexOf(btnValue) === -1) {
        return setInputedValues(""); // Ensure the first input is a number
      } else {
        return btnValue === "C"
          ? setInputedValues("")
          : btnValue === "="
          ? calculate()
          : setInputedValues((prevVal) => {
              return prevVal + btnValue;
            });
      }
    } else {
      return btnValue === "C"
        ? setInputedValues("")
        : btnValue === "="
        ? calculate()
        : setInputedValues((prevVal) => {
            return prevVal + btnValue;
          });
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
