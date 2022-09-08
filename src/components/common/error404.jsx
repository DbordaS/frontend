import React, { Component } from 'react'

export default class Error404 extends Component {

  botonredireccion=()=>{
    const usuario = localStorage.getItem("user")
    if(usuario === "admin"){
      window.location=('/paginaprincipal/admin/')
    }else if(usuario === "user"){
      window.location=('/paginaprincipal/user')
    }else {
      window.location=('/')
    }
  }

  render() {
    return (
      <React.Fragment>
         <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center row">
                <div className=" col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                        className="img-fluid"/>
                </div>
                <div className=" col-md-6 mt-5">
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Pagina no encontrada.</p>
                    <p className="lead">
                        La pagina que deseas mirar no existe.
                    </p>
                    <a className="btn btn-primary" onClick={this.botonredireccion}>ir a Inicio</a>
                </div>

            </div>
        </div>
      </React.Fragment>
    )
  }
}
