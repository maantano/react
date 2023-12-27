import useInputReducer from "../hooks/use-input_reducer";
import useInputs from "../hooks/use-inputs";

const isNotEmpty = (value) => value.trim() !== "";
const emailNotEmpty = (value) => value.includes("@");

const namePattern = /^[a-zA-Z0-9_]+$/;
const emailPattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameValid,
    hasError: firstNameError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlur,
    reset: firstNameReset,
  } = useInputReducer((value) => namePattern.test(value));
  // } = useInputReducer(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameValid,
    hasError: lastNameError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlur,
    reset: lastNameReset,
  } = useInputReducer((value) => namePattern.test(value));
  // } = useInputReducer(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlur,
    reset: emailReset,
  } = useInputReducer((value) => emailPattern.test(value));

  // } = useInputReducer(emailNotEmpty);

  let formIsValid = false;
  if (firstNameValid && lastNameValid && emailValid) formIsValid = true;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    firstNameReset();
    lastNameReset();
    emailReset();
  };
  const firstNameInputClasses = `form-control ${
    firstNameError ? "invalid" : ""
  }`;
  const lastNameInputClasses = `form-control ${lastNameError ? "invalid" : ""}`;
  const emailInputClasses = `form-control ${emailError ? "invalid" : ""}`;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlur}
            type="text"
            id="firstName"
            value={firstNameValue}
          />
          {firstNameError && (
            <p className="error-text">
              First Name must only contain letters and numbers.
            </p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlur}
            type="text"
            id="lastName"
            value={lastNameValue}
          />
          {lastNameError && (
            <p className="error-text">
              Last Name must only contain letters and numbers.
            </p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlur}
          type="email" // 변경된 부분
          id="email"
          value={emailValue}
        />
        {emailError && (
          <p className="error-text">Enter a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
