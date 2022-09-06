import axios from "axios";

import React, { Component } from 'react'
import Navbar from "./Navbar";

export default class PaginaPrincipal extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar/>
            <div>paginaPrincipal</div>
        </React.Fragment>
    )
  }
}
