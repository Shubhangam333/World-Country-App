import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import CountryDetails from "./components/Country/CountryDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country/:name",
    element: <CountryDetails />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
