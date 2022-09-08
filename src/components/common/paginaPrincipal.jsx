import axios from "axios";

import React, { Component } from 'react'
import Navbar from "./Navbar";

export default class PaginaPrincipal extends Component {

  Redireccion=()=>{
    const token = localStorage.getItem("token")
    if(token === ""){

    }else{
      window.location=("/*")
    }
  }

  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <div>paginaPrincipal</div>
        </React.Fragment>
    )
  }
}
