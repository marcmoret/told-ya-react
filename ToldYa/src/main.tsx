import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Argument from "./argument/argument.tsx";
import NotFoundPage from "./navbar/notFoundPage.tsx";
import Voting from "./voting.tsx";
import Navbar from "./navbar/navbar.tsx";
import Contact from "./navbar/contact.tsx";
import About from "./navbar/about.tsx";
import Debater from "./argument/debater.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [],
  },
  {
    path: "/argument",
    element: <Argument />,
    children: [],
  },
  {
    path: "/voting",
    element: <Voting />,
    children: [
      {
        path: "/voting/:votingId",
        element: <Voting />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/debater",
    element: <Debater />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);
