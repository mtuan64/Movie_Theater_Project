import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import UserInfoContext from "./context/UserInfoContext";

const App = () => {
  return (
    <UserInfoContext>
      <RouterProvider router={route} />
    </UserInfoContext>
  );
};

export default App;
