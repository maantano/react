import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput();
    resetemailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// import { useState } from "react";

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);

//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

//   const enteredNameIsValid = enteredName.trim() !== "";
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

//   const enteredEmailIsValid = enteredEmail.includes("@");
//   const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

//   console.log("enteredEmailIsValid ===>", enteredEmailIsValid);
//   console.log("enteredEmailTouched ===>", enteredEmailTouched);
//   console.log("enteredEmailIsInvalid ===>", enteredEmailIsInvalid);

//   let formIsValid = false;

//   if (enteredNameIsValid && enteredEmailIsValid) {
//     formIsValid = true;
//   }

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };

//   const emailInputChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };

//   const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);
//   };

//   const emailInputBlurHandler = (event) => {
//     setEnteredEmailTouched(true);
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     setEnteredNameTouched(true);

//     if (!enteredNameIsValid) {
//       return;
//     }

//     console.log(enteredName);

//     // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
//     setEnteredName("");
//     setEnteredNameTouched(false);

//     setEnteredEmail("");
//     setEnteredEmailTouched(false);
//   };

//   const nameInputClasses = nameInputIsInvalid
//     ? "form-control invalid"
//     : "form-control";

//   const emailInputClasses = enteredEmailIsInvalid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//         />
//         {nameInputIsInvalid && (
//           <p className="error-text">Name must not be empty.</p>
//         )}
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor="email">Your E-Mail</label>
//         <input
//           type="email"
//           id="email"
//           onChange={emailInputChangeHandler}
//           onBlur={emailInputBlurHandler}
//           value={enteredEmail}
//         />
//         {enteredEmailIsInvalid && (
//           <p className="error-text">Please enter a valid email.</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

// import { useEffect, useRef, useState } from "react";

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
//   const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

//   // ===========================================================================

//   let formIsValid = false;
//   if (enteredNameIsValid) {
//     formIsValid = true;
//   } else {
//     formIsValid = false;
//   }
//   // const [formIsValid, setFormIsValid] = useState(false);

//   // useEffect(() => {
//   //   if (enteredNameIsValid) {
//   //     setFormIsValid(true);
//   //   } else {
//   //     setFormIsValid(false);
//   //   }
//   // }, [formIsValid, enteredNameIsValid]);
//   // ===========================================================================

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//     if (event.target.value.trim() !== "") {
//       setEnteredNameIsValid(true);
//     }
//   };

//   const nameInputBlurHandler = (e) => {
//     setEnteredNameIsTouched(true);
//     if (enteredName.trim() === "") {
//       setEnteredNameIsValid(false);
//     }
//   };

//   useEffect(() => {
//     if (enteredNameIsValid) {
//       console.log("Name Input is valid");
//     }
//   }, [enteredNameIsValid]);

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameIsTouched(true);
//     if (enteredName.trim() === "") {
//       setEnteredNameIsValid(false);
//       return;
//     }
//     // const enteredValue = nameInputRef.current.value;
//     setEnteredNameIsValid(true);
//     setEnteredName("");
//     // setFormIsValid(false);
//     // nameInputRef.current.value = '' ==> NOT IDEAL, DONT MANIPULATE THE DOM
//   };
//   const nameInputRef = useRef();
//   const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;

//   const nameInputClasses = nameInputIsInValid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//           type="text"
//           id="name"
//           ref={nameInputRef}
//         />
//         {nameInputIsInValid && (
//           <p className="error-text">Name must not be empty</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
