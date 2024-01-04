import React, { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  // const data = useRouteLoaderData("event-detail");
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p>Loadding....</p>}>
        <Await resolve={event}>
          {(loaddedEvent) => <EventItem event={loaddedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loadding....</p>}>
        <Await resolve={events}>
          {(loaddedEvents) => <EventsList events={loaddedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/` + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json(
      {
        message: "Could not fetch events",
      },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ req, params }) {
  const id = params.id;
  return defer({ event: await loadEvent(id), events: loadEvents() });
}

// export async function loader({ req, params }) {
//   const response = await fetch(`http://localhost:8080/events/${params.id}`);
//   if (!response.ok) {
//     throw json(
//       { message: "Could not fetch details for selected event" },
//       { status: 500 }
//     );
//   } else {
//     return response;
//   }
// }

export async function action({ request, params }) {
  const response = await fetch(`http://localhost:8080/events/${params.id}`, {
    // method: "DELTE",
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  }
  return redirect("/events");
}
