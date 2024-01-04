import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const ErrorPage = () => {
  const error = useRouteError();
  console.log("error ===>", error);
  let title = "An error occured!";
  let message = "Something went wrong";
  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  } else if (error.status === 404) {
    message = "Could not find resource or page";
    title = "Not Found!";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
        {/* <p>{error.status}</p> */}
      </PageContent>
    </>
  );
};

export default ErrorPage;
