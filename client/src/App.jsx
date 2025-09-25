import { useRoutes } from "react-router";
import {
  AuthProvider,
  PrivateRoute,
  AuthRoute,
} from "./components/AuthProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/Create-post/CreatePost";
import SinglePost from "./pages/SinglePost/SInglePost";
import AllPostsPage from "./pages/All-posts";
import AboutPage from "./pages/About-us/index";
import ContactPage from "./pages/Contact";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

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
          element: (
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          ),
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
        {
          path: "/login",
          element: (
            <AuthRoute>
              <Login />
            </AuthRoute>
          ),
        },
        {
          path: "/register",
          element: (
            <AuthRoute>
              <Register />
            </AuthRoute>
          ),
        },
      ],
    },
  ]);
  return element;
}

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
