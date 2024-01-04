import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Browse from "../Browse/Browse";
import Loader from "../Loader/Loader";




const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/Movies-GPT",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    }
  ]);

  return (
    <RouterProvider router={appRouter}>
      <Login />
    </RouterProvider>
  );
};

export default Body;
