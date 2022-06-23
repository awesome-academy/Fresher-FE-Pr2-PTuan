import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrimaryLayout from './layout/PrimaryLayout';
import PrivateLayout from './layout/PrivateLayout';

import { publicRoutes, privateRoutes } from './routers';

function App() {
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
