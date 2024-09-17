import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Admin from "../Layout/Admin";
import AdminPage from "../pages/AdminPage/AdminPage";
import AdminContact from "../pages/AdminPage/AdminContact/AdminContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      
      
    ]
  },
  {
    path: 'admin',
    element: <Admin></Admin>,
    children:[
      {
        path:'/admin',
        element:<AdminPage></AdminPage>
      },
      {
        path:'dashboard',
        element:<AdminPage></AdminPage>
      },
      {
        path:'contact',
        element:<AdminContact></AdminContact>,
        loader: () => fetch('http://localhost:5000/users')
      },
    ]
  },
]);

export default router