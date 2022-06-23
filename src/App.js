import React from 'react';
import Layout from './components/Layout';
import Login from './components/Account/Login';
import Register from './components/Account/Register';

import { Route, Routes, Navigate, Link } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute'

import Error404 from './pages/errors/Error404'
import Profile from './pages/Profile'
//style
import "../src/assets/scss/theme.scss";

//pages
import Analysis from './components/oldclients/Analysis'
import FindOldCli from "./components/oldclients/FindOldCli";

/// var theme = import("../src/assets/scss/theme.scss");
// theme.use;


function App() {
  return (
    <div id="content">
      <Routes>
        {/* <Route exact path="/" element={<ProtectedRoute />}> */}
        <Route exact path='/' element={<Layout />} >
          <Route exact path="/findoldcli" element={<FindOldCli />} />
          <Route exact path="/analysis" element={<Analysis />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App