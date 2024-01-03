import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import EventsPage from "./page/EventsPage";
import EventDetailPage from "./page/EventDetailPage";
import NewEventPage from "./page/NewEventPage";
import EditEventPage from "./page/EditEventPage";
import ErrorPage from "./page/ErrorPage";
import Root from "./page/Root";
import EventRoots from "./page/EventRoots";
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
          { index: true, element: <EventsPage /> },
          { path: ":id", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
