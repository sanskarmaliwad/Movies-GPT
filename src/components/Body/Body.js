import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Browse from "../Browse/Browse";



const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <Login />
    </RouterProvider>
  );
};

export default Body;
