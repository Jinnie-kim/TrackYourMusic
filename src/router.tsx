import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Home from './pages/Home';

interface RouterElement {
  path: string;
  element: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/loading',
    element: <Loading />,
  },
  {
    path: '/home',
    element: <Home />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
    };
  })
);
