import { Component } from "react";
import "../css/estilos.css"
import AlertaItems from "./AlertaItems.js"
import BotonCarrito from "./BotonCarrito.js"


class Carrito extends Component {
    render(){
        const {Productos}=this.props
        return(
            <div className="ContenedorCarrito">
            <BotonCarrito productos={Productos}/>
            
            
            </div>
            
            
            )
    }
}
export default Carrito