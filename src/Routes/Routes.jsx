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
import NewsDetails from "../pages/News/NewsDetails";
import EventDetails from "../pages/Event/EventDetails";
import Expart from "../pages/Success/Expart/Expart";
import VideoAdd from "../pages/Success/VideoAdd/VideoAdd";
import DcitInstitue from "../pages/DcitInstitue/DcitInstitue";
import OurClient from "../pages/Home/OurClient/OurClient";
import Software from "../pages/Software/Software";
import Services from "../pages/Services/Services";
import Hosting from "../pages/Hosting/Hosting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dcitinstitue',
        element: <DcitInstitue/>
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },

      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/dcitinstitue/:courseName',
        element: <Courses />
      },
      {
        path: '/software/:softwareId',
        element: <Software/>
      },
      {
        path: '/hosting/:hostingId',
        element: <Hosting/>
      },
      {
        path: '/services/:serviceId',
        element: <Services/>
      },
      {
        path: '/event',
        element: <Event />
      },
      {
        path: '/ourClient',
        element: <OurClient />
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/newsDetails',
        element: <NewsDetails />,
      },
      {
        path: '/eventdetails',
        element: <EventDetails />,
      },
      {
        path: '/expart',
        element: <Expart />,
      },
      {
        path: '/videoadd',
        element: <VideoAdd />,
      },
      {
        path: '/job',
        element: <Jobplace />
      },
      {
        path: '/student',
        element: <Student />
      },

    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: '/admin',
        element: <AdminPage />
      },
      {
        path: 'dashboard',
        element: <AdminPage />
      },
      {
        path: 'contact',
        element: <AdminContact />,
        loader: () => fetch('https://dcit-server.vercel.app/users')
      },
    ]
  },
]);

export default router