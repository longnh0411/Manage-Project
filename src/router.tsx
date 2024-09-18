import { Route, Routes } from 'react-router-dom';
import ManageTask from './screen/ManageTask';
import Caro from './screen/Caro';
import App from "./App";
import React from 'react';
import LandingPage from './screen/LandingPage/page';
import SelectImage from './screen/SelectImage/page';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<App/>} 
      />
      <Route 
        path='/manage-task' 
        element={<ManageTask/>}
      />
      <Route 
        path="/caro" 
        element={<Caro/>} 
      />
      <Route
        path='/lading-page'
        element={<LandingPage/>}
      />
      <Route
        path='/select-image'
        element={<SelectImage/>}
      />
    </Routes>
  );
};

export default RoutesComponent;