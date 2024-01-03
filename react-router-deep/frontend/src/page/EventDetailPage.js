import React from "react";
import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Event Page</h1>
      <p>{params.id}</p>
      <button>
        <Link to={".."}>Back</Link>
      </button>
    </>
  );
};

export default EventDetailPage;
