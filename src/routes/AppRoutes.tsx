import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LayOut from "../LayOut/LayOut";
import CheckEligibility from "../Pages/CheckEligibility/CheckEligibility";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "checkEligibility", element: <CheckEligibility /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
