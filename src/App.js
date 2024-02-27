import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(()=>{
    console.log("authenticate?", authenticate);
  },[authenticate]);
  
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}></Route>
        <Route 
          path="/products/:id" 
          element={<PrivateRoute authenticate={authenticate} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
