import React from "react";
import EventsList from "../components/EventsList";
import { Link } from "react-router-dom";

const PRODUCT = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
  { id: "e4", title: "Event 4" },
  { id: "e5", title: "Event 5" },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsList</h1>
      {/* <EventsList /> */}
      <div>
        <ul>
          {PRODUCT.map((item) => (
            <li key={item.id}>
              <Link to={item.id}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EventsPage;
