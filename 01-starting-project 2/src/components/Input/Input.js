import React, { useState } from "react";
import styled from "styled-components";
import classes from "./Input.module.css";

const Container = styled.form`
  background-color: white;
  width: 70%;
  height: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const AddBtn = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 40px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background: linear-gradient(180deg, #1f584b, #17493d);
  color: #c2e9e0;
  font-family: "Roboto Condensed", sans-serif;
  cursor: pointer;
`;

const initalState = {
  id: "",
  userName: "",
  age: "",
};

const Input = (props) => {
  const [userInput, setUserInput] = useState(initalState);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
        id: Math.random() + 1,
      };
    });
  };

  const isValidUserName = (userName) => {
    return typeof userName === "string" && userName.trim() !== "";
  };
  const isValidAge = (age) => {
    const numericAge = Number(age);
    return (
      typeof numericAge === "number" && !isNaN(numericAge) && numericAge > 0
    );
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (isValidUserName(userInput.userName) && isValidAge(userInput.age)) {
      props.onClickBtn((prev) => [...prev, userInput]);
      setUserInput(initalState);
    } else {
      if (typeof userName === "string" && userInput.userName.trim() !== "") {
        props.setIsModalOpen({
          openChk: true,
          type: 1,
          contents: "문자열 아님",
        });
      } else if (Number(userInput.age) < 0) {
        props.setIsModalOpen({
          openChk: true,
          type: 3,
          contents: "Enter a valid value (less than zero)",
        });
      } else if (typeof numericAge !== "number") {
        props.setIsModalOpen({
          openChk: true,
          type: 2,
          contents: "Please enter a valid value (character is not available)",
        });
      }
    }
  };
  return (
    <Container onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <label htmlFor="userName">UserName</label>
        <input
          id="userName"
          type="text"
          value={userInput["userName"]}
          onChange={(e) => inputChangeHandler("userName", e.target.value)}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="text"
          value={userInput["age"]}
          onChange={(e) => inputChangeHandler("age", e.target.value)}
        />
      </div>
      <AddBtn onClick={submitHandler} type="submit">
        ADD
      </AddBtn>
    </Container>
  );
};

export default Input;
