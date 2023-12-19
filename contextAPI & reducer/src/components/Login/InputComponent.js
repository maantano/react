import React, { useEffect, useImperativeHandle, useRef } from "react";
import classes from "./Login.module.css";

const InputComponent = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.typeState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.typeState.stateType}>
        {props.typeState.stateType === "e-mail" ? "E-Mail" : "PASSWORD"}
      </label>
      <input
        ref={inputRef}
        type={props.typeState.stateType}
        id={props.typeState.stateType}
        value={props.typeState.value}
        // value={enteredEmail}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default InputComponent;
