import "./App.css";




import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About/About";
import Contact from "./Components/Home/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";
import Error from "./Components/Home/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/home",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfolio",
          element: <Portfolio/>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <Error/>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;