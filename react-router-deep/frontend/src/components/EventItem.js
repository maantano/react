import { Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    // ...
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      // useSubmit({},{}) 은 두개 인자를 받음
      //  첫번쨰는 우리가 제출하려는 데이터, 그 데이터는 자동으로 Form 데이터 객체에 감싸진다. formData()
      //  두번째는 우리가 폼에 설정할 수 있는 것과, 기본적으로 같은 값들을 설정할 수 있게 한다.
      // method라고 하고 이 경우에는 delete로 서렁이 가능하다.

      // 우선 여기서는 제출하려는 데이터가 없기 때문에 null을 사용하고, method:delete를 사용
      // action키를 다른 경로로 지정할 수 있다.
      // submit(null, { method: "delete", action: "/a - different- path" });
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
