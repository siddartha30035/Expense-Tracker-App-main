import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Home from './Pages/Home/Home';
import SetAvatar from './Pages/Avatar/setAvatar';
import Budgetpage from './Pages/Auth/Budgetpage';  // Corrected to default export
import Expensedisplay from './Pages/Auth/Expensedisplay';  // Corrected to default export
import 'bootstrap/dist/css/bootstrap.min.css';

const  App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/budgetpage" element={<Budgetpage />} />
          <Route path="/expensedisplay" element={<Expensedisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
