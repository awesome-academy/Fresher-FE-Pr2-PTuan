import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import DetailProduct from '../pages/DetailProduct';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Complete from '../pages/Complete';

import MyProfile from '../pages/Profile/MyProfile';
import ChangeAddress from '../pages/Profile/ChangeAddress';
import ChangePassword from '../pages/Profile/ChangePassword';
import MyOrder from '../pages/Profile/MyOrder';
import MyFavorite from '../pages/Profile/MyFavorite';

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
    path: '/detail/:id',
    component: <DetailProduct />,
  },
  {
    path: '/cart',
    component: <Cart />,
  },
  {
    path: '/checkout',
    component: <Checkout />,
  },
  {
    path: '/complete',
    component: <Complete />,
  },
];

export const privateRoutes = [
  {
    path: '/my-profile',
    component: <MyProfile />,
  },
  {
    path: '/my-address',
    component: <ChangeAddress />,
  },
  {
    path: '/change-password',
    component: <ChangePassword />,
  },
  {
    path: '/my-order',
    component: <MyOrder />,
  },
  {
    path: '/favorite-product',
    component: <MyFavorite />,
  },
];
