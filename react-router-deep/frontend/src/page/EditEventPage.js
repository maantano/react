import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  // Router의 Id를 받아서 데이터를 로더 시킨다.
  // const data = useLoaderData();
  // const params = useParams();
  // console.log(params);

  return (
    <>
      <EventForm method="patch" event={data.event} />
      {/* <h1>Edit Event Page</h1> */}
      {/* <p>{params.id}</p> */}
    </>
  );
};

export default EditEventPage;
