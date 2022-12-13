import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import MainLayout from './layouts/MainLayout';

const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={
            <HomePage />
          }
          />
          <Route path="map" element={
            <MapPage />
          } />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes;
