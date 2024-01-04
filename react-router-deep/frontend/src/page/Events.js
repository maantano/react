import { Suspense, useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import { Await, defer, json, useLoaderData } from "react-router-dom";

function Events() {
  // // 방법 1. ==========================================
  // // App js 의 Router에 loader로 미리 받아온다.
  // // const [isLoading, setIsLoading] = useState(false);
  // // const [fetchedEvents, setFetchedEvents] = useState();
  // // const [error, setError] = useState();
  // // useEffect(() => {
  // //   async function fetchEvents() {
  // //     setIsLoading(true);
  // //     const response = await fetch('http://localhost:8080/events');
  // //     if (!response.ok) {
  // //       setError('Fetching events failed.');
  // //     } else {
  // //       const resData = await response.json();
  // //       setFetchedEvents(resData.events);
  // //     }
  // //     setIsLoading(false);
  // //   }
  // //   fetchEvents();
  // // }, []);
  // //
  // // 방법2. ================================================
  // // const events = useLoaderData();
  // // 방법 2.5
  // const data = useLoaderData();
  // // if (data.isError) {
  // //   return <p>{data.message}</p>;
  // // }
  // const events = data.events;
  // // 방법3. ================================================
  // // 직접 EventList에서 useLoaderData() 훅을 호출한다.
  // return (
  //   <>
  //     {/* ==================================================== */}
  //     {/* 방법 1. */}
  //     {/* 컴포넌트도 다 받아올꺼기 때문에, 로딩 처리가 필요가 없다. */}
  //     {/* <div style={{ textAlign: "center" }}>
  //       {isLoading && <p>Loading...</p>}
  //       {error && <p>{error}</p>}
  //     </div>
  //     {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
  //     {/* ==================================================== */}
  //     {/* 방법 2. */}
  //     <EventsList events={events} />
  //     {/* ==================================================== */}
  //     {/* <EventsList /> */}
  //   </>
  // );
  // 최종!. 지연 시키기.
  const { events } = useLoaderData();
  // Promise <Awiat> 컴포넌트를 감싸는 컴포넌트가 있어야 한다. 그게 <Suspense> 컴포넌트
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loaddedEvents) => <EventsList events={loaddedEvents} />}
      </Await>
    </Suspense>
  );
}

export default Events;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // 응답 사례
    // 에러 처리 1.
    // return { isError: true, message: "Could not fetch events" };
    // 방법2. JSON 브라우저 메소드 사용
    // throw new Response(
    //   JSON.stringify({
    //     message: "Could not fetch events",
    //   }),
    //   { status: 500 }
    // );
    // 방법 3.response error throw 에서 JSON.stringify & Error 페이지에서 JSON.parse, 사용 안해도 됨
    // 한번에 묶으면 안되고, 옵션 마다 객체로 만들어줘야됨.
    throw json(
      {
        message: "Could not fetch events",
      },
      { status: 500 }
    );
  } else {
    // 방법 2
    // const resData = await response.json();
    // return resData.events;
    // 방법 2.5
    // return response;
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  // defer 함수 안에 이 페이지에서 오갈 수 있는 모든 HTTP 요청들을 넣어줘야 함
  return defer({ events: loadEvents() });
  // const response = await fetch("http://localhost:8080/events");

  // if (!response.ok) {
  //   // 응답 사례
  //   // 에러 처리 1.
  //   // return { isError: true, message: "Could not fetch events" };
  //   // 방법2. JSON 브라우저 메소드 사용
  //   // throw new Response(
  //   //   JSON.stringify({
  //   //     message: "Could not fetch events",
  //   //   }),
  //   //   { status: 500 }
  //   // );
  //   // 방법 3.response error throw 에서 JSON.stringify & Error 페이지에서 JSON.parse, 사용 안해도 됨
  //   // 한번에 묶으면 안되고, 옵션 마다 객체로 만들어줘야됨.
  //   throw json(
  //     {
  //       message: "Could not fetch events",
  //     },
  //     { status: 500 }
  //   );
  // } else {
  //   // 방법 2
  //   // const resData = await response.json();
  //   // return resData.events;
  //   // 방법 2.5
  //   return response;
  // }
}
