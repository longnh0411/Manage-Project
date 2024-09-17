import { Route, Routes } from 'react-router-dom';
import ManageTask from './screen/ManageTask';
import CartDemo from './screen/Cart';
import Caro from './screen/Caro';
import App from "../src/App";

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
        path='/cart'
        element={<CartDemo/>}
      />
      <Route 
        path="/caro" 
        element={<Caro/>} 
      />
    </Routes>
  );
};

export default RoutesComponent;