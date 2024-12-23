import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

const HomePage = Loadable(lazy(() => import("../views/home/HomePage")));
<<<<<<< HEAD
const IntroducePage = Loadable(lazy(() => import("../views/introduce/IntroducePage")));
=======
const SearchPage = Loadable(lazy(() => import("../views/search/SearchPage")));
>>>>>>> 9c0e0fe (update project)

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/trang-chu" /> },
      { path: "/trang-chu", element: <HomePage /> },
<<<<<<< HEAD
      { path: "/gioi-thieu", element: <IntroducePage /> },       
=======
      { path: "/tra-cuu", element: <SearchPage /> }
>>>>>>> 9c0e0fe (update project)
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      //   { path: '404', element: <Error /> },
      //   { path: 'maintenance', element: <Maintenance /> },
      //   { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
