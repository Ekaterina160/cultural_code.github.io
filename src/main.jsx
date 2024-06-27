import { Button, Typography } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import StandardImageList1 from './pages/zov';
import Fir_p from './pages/fir_p';
import Babax from './pages/zov_russia';
import Papka from './pages/papka';
import Eshkere from './pages/eshkere';

const Layout = () => {
  return(
   <div>
    <Link to={'/main'}><Button>На главную</Button></Link>
    <Link to={'/cinema'}><Button>Кино</Button></Link>
    <Link to={'/theаtre'}><Button>Театр</Button></Link>
    <Link to={'/now'}><Button>Сейчас</Button></Link>
    <Outlet />
    </div> 
  );
};
const pages = [
  {
    path: '/',
    element: <Babax/>
  },
  {
    path: '/*',
    element: <Babax/>
  },
  {
    path: '/now',
    element: <Fir_p/>
  },
  {
    path: '/cinema',
    element: <Eshkere/>
  },
  {
    path: '/theаtre',
    element: <Papka/>
  },
];

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
