import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Admin from "../Layout/Admin";
import AdminPage from "../pages/AdminPage/AdminPage";
import AdminContact from "../pages/AdminPage/AdminContact/AdminContact";
import Gallery from "../pages/Gallery/Gallery";
import Courses from "../pages/Courses/Courses/Courses";
import Event from "../pages/Event/Event";
import Rpl from "../pages/Rpl/Rpl";
import News from "../pages/News/News";
import Jobplace from "../pages/Success/Jobplace/Jobplace";
import Student from "../pages/Success/Student/Student";

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
      
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/python',
        element: <Courses></Courses>
      },
      {
        path: '/event',
        element: <Event></Event>
      },
      {
        path: '/rpl',
        element: <Rpl></Rpl>
      },
      {
        path: '/news',
        element: <News></News>
      },
      {
        path: '/job',
        element: <Jobplace></Jobplace>
      },
      {
        path: '/student',
        element: <Student></Student>
      },
      
    ]
  },
  {
    path: '/admin',
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
        loader: () => fetch('https://dcit-server.vercel.app/users')
      },
    ]
  },
]);

export default router