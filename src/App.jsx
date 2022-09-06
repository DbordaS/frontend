import React, { Component } from 'react'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import PaginaPrincipal from './components/common/paginaPrincipal';
import LoginForm from './components/common/LoginForm';
import NavBar from './components/common/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'primereact/resources/themes/nova/theme.css'
import Error404 from './components/common/error404';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
    )
  }
}

