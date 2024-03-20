import BaseLayout from "../component/BaseLayout";
import CreateUser from "../page/user/createuser";
import UpdateUser from "../page/user/updateUser";

const { createBrowserRouter } = require("react-router-dom");
const { default: User } = require("../page/user");
const { default: Login } = require("../page/login");
const { default: Film } = require("../page/film");

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/user",
    element: (
      <BaseLayout>
        <User />
      </BaseLayout>
    ),
  },

  {
    path: "/user/create",
    element: (
      <BaseLayout>
        <CreateUser />
      </BaseLayout>
    ),
  },

  {
    path: "/user/update/:id",
    element: (
      <BaseLayout>
        <UpdateUser />
      </BaseLayout>
    ),
  },

  {
    path: "/film",
    element: (
      <BaseLayout>
        <Film />
      </BaseLayout>
    ),
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
]);
