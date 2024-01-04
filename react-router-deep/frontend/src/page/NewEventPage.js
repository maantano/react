import React from "react";
import EventForm from "../components/EventForm";
// import { json, redirect } from "react-router-dom";
// 기존 EventForm의 액션을 editPage와 같이 쓰려고 Form으로 이동 시키고 메소드에 따라서 액션을 다르게 적용시켰다.
// App.js에 manipulateAction으로 따로 뽑아냄

const NewEventPage = () => {
  return <EventForm method="post" />;
};

export default NewEventPage;
