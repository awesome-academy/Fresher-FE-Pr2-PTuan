import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getLocal } from './helper';
import { getUserInfo } from './redux/actions/user.action';

import PrimaryLayout from './layout/PrimaryLayout';
import PrivateLayout from './layout/PrivateLayout';
import ProfileLayout from './layout/ProfileLayout';

import { publicRoutes, privateRoutes } from './routers';
import { getOrderById } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = getLocal('user');

  useEffect(() => {
    if (id) {
      dispatch(getUserInfo(id));
      dispatch(getOrderById(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        {publicRoutes.map(({ path, component }, index) => (
          <Route path={path} element={component} key={index} />
        ))}
      </Route>
      {privateRoutes.map(({ isAdmin, path, component }, index) => (
        <Route element={isAdmin ? <PrivateLayout /> : <ProfileLayout />}>
          <Route key={index} path={path} element={component} />
        </Route>
      ))}
    </Routes>
  );
}

export default App;
