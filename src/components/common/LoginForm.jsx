import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BASE_URL } from '../../services/apiService';
import './LoginForm.scss'

export default class LoginForm extends Component {
    constructor(props){
        super(props)
    }
    state = {
        form:[
            {
                "documento":'',
                "contraseña":''
            }
        ]
    }

    componentDidMount(){
        axios.get(`${BASE_URL}/login`).then(res => {
            console.log(res);
        })
    }

    render() {
    return (
        <React.Fragment>
            <div className='login wrapper-content'>
            <Form className='login__content'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Documento de identidad</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu Documento" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
            </div>
        </React.Fragment>
    )
  }
}
