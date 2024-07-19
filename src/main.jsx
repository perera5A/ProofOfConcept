import React from "react";
import ReactDOM from "react-dom/client";
import App from "./LandingPage.jsx";
import Login from "./login.jsx";
import SignUp from "./SignUp.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import NotFound from "./notfound.jsx";
import Mainpage from "./mainLoggedInPage.jsx";
import CreateRecord from "./CreateSurveyRecords.jsx";
import SearchRecords from "./SearchSurveyRecords.jsx";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/userlandingpage",
    element: <Mainpage />,
  },

  {
    path: "/createRecords",
    element: <CreateRecord />,
  },

  {
    path: "/searchRecords",
    element: <SearchRecords />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
