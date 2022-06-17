import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import DetailProduct from '../pages/DetailProduct';

export const publicRoutes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/register',
    component: <Register />,
  },
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '/detail',
    component: <DetailProduct />,
  },
];

export const privateRoutes = [
  {
    path: '/admin',
    component: '',
  },
];
