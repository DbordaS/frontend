import React, { Component } from 'react'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import PaginaPrincipal from './components/common/paginaPrincipal';
import Paginaprincipal from './Views/usuario/paginaPrincipalUser';
import LoginForm from './components/common/LoginForm';
import Error404 from './components/common/error404';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/override.scss'
import RegisterForm from './components/common/RegisterForm';
import PaginaPrincipalAdmin from './Views/admin/paginaPrincipalAdmin';
import PaginaPrincipalUser from './Views/usuario/paginaPrincipalUser';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/paginaprincipal/admin' element={<PaginaPrincipalAdmin/>}></Route>
          <Route path='/paginaprincipal/user' element={<PaginaPrincipalUser/>}></Route>
          <Route path='*' element={<Error404/>}/>
          
        </Routes>
      </Router>
    )
  }
}

