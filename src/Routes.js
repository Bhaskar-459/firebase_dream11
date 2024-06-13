import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from './components/UserComponents/TopComponents/Navbar.js';
import Heading from './components/UserComponents/TopComponents/Heading.js';
import Login from './components/UserComponents/LoginComponents/Login.js';
import Matches from './components/UserComponents/MatchComponents/Matches.js';
import YourTeams from './components/UserComponents/YourTeamsComponents/YourTeams.js';
import ParticipatewithId from './components/UserComponents/MatchComponents/ParticipatewithId.js';

import AdminLogin from './components/AdminComponents/AdminLogin.js';
import AdminMatches from './components/AdminComponents/AdminMatches.js';
import AdminNav from './components/AdminComponents/AdminNav.js'
import SetMatchForm from './components/AdminComponents/SetMatchForm.js';
import WelcomeAdminComponent from './components/AdminComponents/WelcomeAdminComponent.js';
import UpdatePoints from './components/AdminComponents/UpdatePoints.js';


const Layout = () => (
  <>
    <NavBar />
    <Heading />
    <Outlet />
  </>
);

const Admin = () => (
  <>
    <AdminNav />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/matches',
        element: <Matches />,
      },
      {
        path: '/matches/participate/:id',
        element: <ParticipatewithId/>,
      },
      {
        path: '/yourteams',
        element: <YourTeams />,
      },
    ],
  },
  {
    element: <Admin/>,
    children : [
      {
        path: '/admin',
        element: <AdminLogin />,
      },
      {
        path: '/admin/matches',
        element: <><WelcomeAdminComponent/><AdminMatches /></>,
      },
      {
        path: '/admin/setmatch',
        element: <SetMatchForm />,
      },
      {
        path: '/admin/setmatchpoints/:id',
        element: <UpdatePoints />,
      }
    ],
  }
]);

export default router;