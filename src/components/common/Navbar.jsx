import React, { Component } from 'react'
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';


export default class Navbar extends Component {
  

   render() {
       const items= [
           {
               label:'Inicio',
               icon:'pi pi-fw pi-home',
               command: ()=> window.location=('/')
           },
           {
              label:'Iniciar Sesion',
              icon:'pi pi-fw pi-sign-in',
              command:()=> window.location=('/login')
           },
           {
              label:'Registrarse',
              icon:'pi pi-fw pi-list',
              command: ()=> window.location=('/register')
           }
       ]
    return (
        <Menubar model={items}/>
    )
  }
}



