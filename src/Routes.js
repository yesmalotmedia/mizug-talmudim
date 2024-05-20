import { createBrowserRouter } from "react-router-dom";

//Layout
import Layout from "./pages/Layout";

//pages
import Home from "./pages/home/Home";
import BeitHamidrash from "./pages/beitHamidrash/BeitHamidrash";
import TalmudHaMemuzag from "./pages/talmudHaMemuzag/TalmudHaMemuzag";
import Contact from "./pages/contact/Contact";
import WhatsNew from "./pages/whatsnew/WhatsNew";
import About from "./pages/about/About";
import Publishing from "./pages/publishing/Publishing";
import ErrorPage from "./pages/ErrorPage";
// sub pages
import PostDetails from "./pages/whatsnew/PostDetails";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "BeitHamidrash",
        element: <BeitHamidrash />,
      },
      {
        path: "TalmudHaMemuzag",
        element: <TalmudHaMemuzag />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "WhatsNew",
        element: <WhatsNew />,
      },

      {
        path: "WhatsNew/:postId",
        element: <PostDetails />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Publishing",
        element: <Publishing />,
      },
    ],
  },
]);
export default routers;
