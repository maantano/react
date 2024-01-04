import { Link, useLoaderData } from "react-router-dom";
import classes from "./EventsList.module.css";

// 방법2 에서 useLoaderData()로 가져온 Promise객체를 다 받아온 events 데이터를 props으로 넘겨주었다.
function EventsList({ events }) {
  // 방법 3. ========================================
  // function EventsList() {
  // const events = useLoaderData();
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
