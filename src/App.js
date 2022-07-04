import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getLocal } from './helper';
import { getAllProduct } from './redux/actions/product.action';

import PrimaryLayout from './layout/PrimaryLayout';
import PrivateLayout from './layout/PrivateLayout';

import { publicRoutes, privateRoutes } from './routers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        {publicRoutes.map((route, index) => {
          return (
            <Route path={route.path} element={route.component} key={index} />
          );
        })}
      </Route>
      <Route element={<PrivateLayout />}>
        {privateRoutes.map((route, index) => {
          <Route key={index} path={route.path} element={route.component} />;
        })}
      </Route>
    </Routes>
  );
}

export default App;
