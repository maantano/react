import React from "react";
import { useParams } from "react-router-dom";

const EditEventPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Edit Event Page</h1>
      <p>{params.id}</p>
    </>
  );
};

export default EditEventPage;
