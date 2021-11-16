import { Component } from "react";
import '../css/estilos.css'
import Logo from "./Logo.js"
import Carrito from "./Carrito.js"

class Nav extends Component{
    render(){
        const {Productos}=this.props
        return(
            <nav className="Menu">
                <Logo>Logo</Logo>
                
                <Carrito Productos={Productos}></Carrito>
            </nav>
        )
    }
}

export default Nav;