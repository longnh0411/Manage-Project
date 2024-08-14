import { Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import ManageTask from './screen/ManageTask';
import CartDemo from './screen/Cart';
import Caro from './screen/Caro';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/manage-task' element={<ManageTask/>}/>
      <Route path='/cart' element={<CartDemo/>}/>
      <Route path="/caro" element={<Caro/>} />
    </Routes>
  );
};

export default RoutesComponent;