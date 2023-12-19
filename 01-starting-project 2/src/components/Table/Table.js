import React from "react";
import classes from "./Table.module.css";
import styled from "styled-components";

const Card = styled.div`
  width: 70%;
  height: 80px;
  border-radius: 10px;
  display: flex;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  margin: 5px 0px;
`;
const User = styled.div`
  width: 98%;
  display: block;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid #e4e4e4;
  padding: 10px;
`;

const Table = (props) => {
  const deleteUser = (id) => {
    props.setUserInputs((prevUserInputs) =>
      prevUserInputs.filter((el) => el.id !== id)
    );
  };

  return (
    <div className={classes[`card-container`]}>
      {!props.userInputs ? (
        <p style={{ color: "white " }}>No investment calculated yet.</p>
      ) : (
        props.userInputs.map((item) => (
          <Card key={item.id} onClick={() => deleteUser(item.id)}>
            <User>
              {item["userName"]} ({item["age"]} Years old)
            </User>
          </Card>
        ))
      )}
    </div>
  );
};

export default Table;
