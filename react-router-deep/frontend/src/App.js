import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import Events, { loader as eventLoader } from "./page/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDeleteAction,
} from "./page/EventDetailPage";
import NewEventPage, { action as newEventAction } from "./page/NewEventPage";
import EditEventPage from "./page/EditEventPage";
import ErrorPage from "./page/ErrorPage";
import Root from "./page/Root";
import EventRoots from "./page/EventRoots";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, {
  action as newsletterAction,
} from "./components/Newsletter";
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage

// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage

// 3. Add a root layout that adds the <MainNavigation> component above all page components

// 4. Add properly working links to the MainNavigation

// 5. Ensure that the links in MainNavigation receive an "active" class when active

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage

// 7. Output the ID of the selected event on the EventDetailPage

// BONUS: Add another (nested) layout route that adds the
//  <EventNavigation> component above all /events... page components

// const router = createBrowserRouter([
//   { path: "/", element: <Homepage /> },
//   { path: "/", element: <Homepage /> },
//   { path: "/events", element: <EventsPage /> },
//   { path: "/events/:id", element: <EventDetailPage /> },
//   { path: "/events/new", element: <NewEventPage /> },
//   { path: "/events/:id/edit", element: <EditEventPage /> },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "events",
        element: <EventRoots />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDeleteAction,
                // loader: eventDetailLoader,
              },
              // { path: "edit", element: <EditEventPage /> },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          // {
          //   path: ":id",
          //   element: <EventDetailPage />,
          //   loader: eventDetailLoader,
          // },
          // { path: ":id/edit", element: <EditEventPage /> },
          // { path: "new", element: <NewEventPage />, action: newEventAction },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
