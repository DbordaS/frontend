import React, { Component } from 'react';
import { BASE_URL } from '../../services/apiService';
import IconUSer from '../../assets/iconuser.png'
import Navbars from './Navbar';
import './LoginForm.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default class LoginForm extends Component {
    constructor(props){
        super(props)
    }
    state = {
        form:{
                "username":'',
                "password":''
            }
    }

    // componentDidMount(){
    //     axios.get(`${BASE_URL}/login`).then(res => {
    //         console.log(res);
    //     })
    // }

    handlerDefault=e=>{
        e.preventDefault();
    }

    handlerChange = async e =>{
        await this.setState({
                    form:{
                        ...this.state.form,
                        [e.target.name]:e.target.value
                    }
            })
    }

    handlerSubmit = ()=>{
        let url = `${BASE_URL}api/login`
        axios.post(url,this.state.form).then(res =>{
            console.log(res);
            if (res.status === 200) {
                localStorage.setItem("user",res.data.rol)
                localStorage.setItem("username",this.state.form.username)
                const typeuser = localStorage.getItem("user")
                localStorage.setItem("token",res.data.token)
                window.location=(`/paginaprincipal/${typeuser}`)
            }
        })
    }

    render() {
    return (
            <div>
                <Navbars/> 
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    <img src={IconUSer} id="icon" alt="User Icon" />
                    </div>


                    <form onSubmit={this.handlerDefault}>
                    <input type="text" className="fadeIn second" name="username" placeholder="Nombre de usuario" onChange={this.handlerChange}/>
                    <input type="password" id="contrasena" className="fadeIn third" name="password" placeholder="Contraseña" onChange={this.handlerChange}/>
                    <input type="submit" className="fadeIn fourth" value="Iniciar Sesion" onClick={this.handlerSubmit}/>
                    </form>

                    <div id="formFooter">
                    <p>No estas Registrado? <a className="underlineHover" href="/register"> Registrate aqui</a></p>
                    </div>

                </div>
            </div>

            </div>
    )
  }
}
