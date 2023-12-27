import React, { useState } from "react";

const useAdd = (validateItem) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateItem(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChageHandler = (e) => {
    console.log("e.target.value ===>", e.target.value);
    setEnteredValue(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChageHandler,
    inputBlurHandler,
    reset,
  };
};

export default useAdd;
