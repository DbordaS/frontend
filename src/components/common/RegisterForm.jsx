import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from '../../services/apiService'
import Navbars from './Navbar'
import './RegisterForm.scss'

export default class RegisterForm extends Component {
    
    constructor(props){
        super(props)
    }

    state = {
        form:{
            "ultimoGradoAlcanzado": "",
            "cuentaConDispositivos": null,
            "dispositivos": "",
            "cuentaConConectividad": null,
            "regimenAfiliacion": "",
                identificacionRequest: {
                "tipoDocumento": "",
                "numeroDocumento": "",
                "nombreCompleto": "",
                "apellidos": "",
                "sexo": "",
                "fechaNacimiento": "",
                "etnia": "",
                "discapacidad": "",
                    cuentaRequest: {
                    "username": "",
                    "password": "",
                        contactoRequest: {
                        "celular": "",
                        "fijo": "",
                        "correoElectronico": "",
                            ubicacionRequest: {
                            "municipio": "",
                            "direccion": "",
                            "barrio": "",
                            "estratoResidencia": ""
        }
      }
    }
  }
        }
    }


    // funcion para evitar la recarga de la pagina 
    handlerDefault=e=>{
        e.preventDefault();
    }

    // manejador para recibir los datos del form a travez de estados
    handlerChange = async e =>{
        await this.setState({
                    form:{
                        identificacionRequest:{
                        ...this.state.form.identificacionRequest,
                        [e.target.name]:e.target.value
                    }
                }
            })
        console.log(this.state.form)
    }

    handlerChangef = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }
    
    handlerChangea = async e=>{
        await this.setState({
            form:{
                identificacionRequest:{
                    cuentaRequest:{
                            ...this.state.form.identificacionRequest.cuentaRequest,
                            [e.target.name]:e.target.value
                            }
                    }
                }
        })
    }

    handlerChangec = async e=>{
        await this.setState({
            form:{
                identificacionRequest:{
                    cuentaRequest:{
                            contactoRequest:{
                                ...this.state.form.identificacionRequest.cuentaRequest.contactoRequest,
                                [e.target.name]:e.target.value
                            }
                            }
                    }
                }
        })
    }

    handlerChangeu = async e=>{
        await this.setState({
            form:{
                identificacionRequest:{
                    cuentaRequest:{
                            contactoRequest:{
                                ubicacionRequest:{
                                    ...this.state.form.identificacionRequest.cuentaRequest.contactoRequest.ubicacionRequest,
                                [e.target.name]:e.target.value
                                }
                            }
                            }
                    }
                }
        })
    }
    // manejador del boton de submit para enviar el formulario a travez de axios
    handlerSubmit= ()=>{
        const url = `${BASE_URL}api/ciudadano/register`
        axios.post(url,this.state.form).then(res=>{
            console.log(res)
        })
    }


    render() { 
        const verdad = true;
        const falso = false;
    return (
        <React.Fragment>
            <Navbars/>
            <div className="wrapper fadeInDown">
        <div id="formContent">
            <div className="fadeIn first">
            <h2>Registrate</h2>
            </div>


            <form onSubmit={this.handlerDefault}>
                <h4>DATOS PERSONALES</h4>
                <select className="form-select fadeIn first onselect" aria-label="Tipo Documento de Identidad" name='tipoDocumento' onChange={this.handlerChange}>
                    <option value="" selected>Tipo Documento de Identidad</option>
                    <option value="CC" name="tipoDocumento" >Cedula</option>
                    <option value="TI" name="tipoDocumento" >Tarjeta de identidad</option>
                </select>
            <input type="text" id="numDocumento" className="fadeIn second" name="numeroDocumento" placeholder="Numero de documento" onChange={this.handlerChange}/>
            <input type="text" id="name" className="fadeIn second" name="nombreCompleto" placeholder="Nombres" onChange={this.handlerChange}/>
            <input type="text"  className="fadeIn second" name="apellidos" placeholder="Apellidos" onChange={this.handlerChange}/>
            <select className="form-select fadeIn first onselect" aria-label="Tipo Documento de Identidad" name='sexo' onChange={this.handlerChange}>
                    <option selected>Genero</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Intersexual">Intersexual</option>
                    <option value="Indefinido">Indefinido</option>
                    <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                </select>
                <label htmlFor="in" className='datatext'>
                <p>fecha de nacimiento:</p>
            <input type="date"  className="fadeIn second" name="fechaNacimiento" placeholder="Fecha de nacimiento" onChange={this.handlerChange}/>
                </label>
            <input type="text"  className="fadeIn second" name="discapacidad" placeholder="Discapacidad" onChange={this.handlerChange}/>
            <input type="text"  className="fadeIn second" name="etnia" placeholder="Etnia" onChange={this.handlerChange}/>

                <h4>CONTACTO</h4>
            <input type="tel"  className="fadeIn second" name="celular" placeholder="Telefono Celular" onChange={this.handlerChangec}/>
            <input type="tel"  className="fadeIn second" name="fijo" placeholder="Telefono Fijo" onChange={this.handlerChangec}/>
            <input type="email"  className="fadeIn second" name="correoElectronico" placeholder="Email" onChange={this.handlerChangec}/>
                <h4>UBICACION</h4>
            <input type="text"  className="fadeIn second" name="municipio" placeholder="Municipio" onChange={this.handlerChangeu}/>
            <input type="text"  className="fadeIn second" name="direccion" placeholder="Direccion" onChange={this.handlerChangeu}/>
            <input type="text"  className="fadeIn second" name="barrio" placeholder="Barrio o Vereda" onChange={this.handlerChangeu}/>
            <select className="form-select fadeIn first onselect" aria-label="estrato" name='estratoResidencia' onChange={this.handlerChangeu}>
                    <option selected>Seleccione su estrato</option>
                    <option value="estrato 1">Estrato 1</option>
                    <option value="estrato 2">Estrato 2</option>
                    <option value="estrato 3">Estrato 3</option>
                    <option value="estrato 4">Estrato 4</option>
                    <option value="estrato 5">Estrato 5</option>
                </select>
                <h4>Escolaridad</h4>
                <input type="text"  className="fadeIn second" name="ultimoGradoAlcanzado" placeholder="Ultimo nivel educatico alcanzado" onChange={this.handlerChangef}/>
                <h4>CONECTIVIDAD</h4>
            <p>¿Cuentas con acceso a dispositivos tecnologicos?</p>
                <div className='form' onChange={this.handlerChangef}>
                <div className="form-check" name="cuentaConDispositivos">
                <input className="form-check-input" type="radio" name="cuentaConDispositivos" id="numberone" value={verdad}/>
                <label className="form-check-label" for="numberone">
                    Si
                </label>
            </div>
            <div className='form-check'>
                <input className="form-check-input" type="radio" name="cuentaConDispositivos" value={falso} />
                <label className="form-check-label" for="numbertwo">
                    No
                </label>
            </div>
                </div>
            <p>Si la respueta anterior fue si ¿Cuales?</p>
            <div className='form' onChange={this.handlerChangef}>
                <div className="form-check" >
                    <input class="form-check-input" type="radio" name='dispositivos' value="movil" id="movil" onChange={this.handlerChanged}/>
                    <label class="form-check-label" for="movil">
                        Telefono Movil
                    </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="radio" name='dispositivos' value="televisor" id="televisor" onChange={this.handlerChanged}/>
                    <label class="form-check-label" for="televisor">
                        Televisor
                    </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="radio" name='dispositivos' value="tablet" id="tablet" onChange={this.handlerChanged}/>
                    <label class="form-check-label" for="tablet">
                        Tablet
                    </label>
                </div>
                <div className='form-check'>
                    <input class="form-check-input" type="radio" name='dispositivos' value="otros" id="otros" onChange={this.handlerChanged}/>
                    <label class="form-check-label" for="otros">
                        otros
                    </label>
                </div>
            </div>
            <p>¿Cuentas con conetividad a internet?</p>
            <div className='form' onChange={this.handlerChangef}>
                <div className="form-check">
                <input className="form-check-input" type="radio" value={verdad} name="cuentaConConectividad" id="conectividad1"/>
                <label className="form-check-label" for="conectividad1">
                    Si
                </label>
            </div>
            <div className='form-check'>
                <input className="form-check-input" type="radio" value={falso} name="cuentaConConectividad" id="conectividad2"/>
                <label className="form-check-label" for="conectividad2">
                    No
                </label>
            </div>
            </div>
            <h4>SALUD</h4>
            <div className='form' onChange={this.handlerChangef}>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="regimenAfiliacion" value="subsidiado" id="subsidiado"/>
                <label className="form-check-label" for="subsidiado">
                    Subsidiado
                </label>
                </div>
                <div className='form-check'>
                <input className="form-check-input" type="radio" name="regimenAfiliacion" value="contributivo" id="contributivo"/>
                <label className="form-check-label" for="contributivo">
                    Contributivo
                </label>
                </div>
                <div className='form-check'>
                <input className="form-check-input" type="radio" name="regimenAfiliacion" value="ninguna" id="ninguna"/>
                <label className="form-check-label" for="ninguna">
                    Ninguna
                </label>
                </div>
            </div>
            <h4>NUEVA CONTRASEÑA</h4>
            <input type="password" id="pw1" className="fadeIn third" name="password" placeholder="Nueva Contraseña" onChange={this.handlerChangea}/>
            <input type="text" id="pw2" className="fadeIn third" name="username" placeholder="usuario" onChange={this.handlerChangea}/>
            <input type="submit" className="fadeIn fourth" value="Registrarse" onClick={this.handlerSubmit}/>

            </form>

            <div id="formFooter">
            <p>Ya Estas Registrado? <a className="underlineHover" href="/login"> Inicia Sesion aqui</a></p>
            </div>

        </div>
    </div>
        </React.Fragment>
    )
  }
}
