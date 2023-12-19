import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  width: 70%;
  height: 300px;
  align-items: center;
  background-color: white;
  position: absolute;
  margin-top: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: purple;
  color: white;
  font-size: 30px;
  font-weight: 700;
  padding: 20px;
`;
const ModalContents = styled.div`
  width: 100%;
  color: black;
  font-size: 25px;
  font-weight: 600;
  padding: 20px;
`;
const ModalClearBtn = styled.button`
  float: right;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: purple;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  cursor: pointer;
`;

const Modal = (props) => {
  return (
    <ModalContainer>
      <ModalHeader>Invalid input</ModalHeader>
      <ModalContents>
        {/* please enter a valid name and age(non-empty values). */}
        {props.isModalOpen.contents}
      </ModalContents>
      <ModalClearBtn onClick={() => props.closeModal()}>Okay</ModalClearBtn>
    </ModalContainer>
  );
};

export default Modal;
