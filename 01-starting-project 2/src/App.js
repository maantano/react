import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Input from "./components/Input/Input";
import classes from "./App.module.css";
import Table from "./components/Table/Table";
import Modal from "./components/Modal/Modal";

const Dim = styled.div`
  z-index: 10;
  position: fixed;

  width: 100%;
  height: 110vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -150px;
`;

const modalInit = {
  openChk: false,
  type: 0,
  contents: "",
};
function App() {
  const [isModalOpen, setIsModalOpen] = useState(modalInit);
  const [userInputs, setUserInputs] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const setUserHandler = (userInput) => {
    setUserInputs(userInput);
  };

  const closeModal = () => {
    setIsModalOpen(modalInit);
  };
  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);
  return (
    <div className={classes.main}>
      {isModalOpen.openChk && (
        <Dim onClick={closeModal}>
          <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
        </Dim>
      )}
      <Input onClickBtn={setUserHandler} setIsModalOpen={setIsModalOpen} />
      <Table setUserInputs={setUserInputs} userInputs={userInputs} />
    </div>
  );
}

export default App;
