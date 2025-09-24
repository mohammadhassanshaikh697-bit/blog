import { useRoutes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/Create-post/CreatePost";
import SinglePost from "./pages/SinglePost/SInglePost";
import AllPostsPage from "./pages/All-posts";
import AboutPage from "./pages/About-us/index";
import ContactPage from "./pages/Contact";

function Routes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/post/:id",
          element: <SinglePost />,
        },
        {
          path: "create",
          element: <CreatePost />,
        },
        {
          path: "/all-posts",
          element: <AllPostsPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);
  return element;
}

function App() {
  // const [toggole, setToggole] = useState();

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
