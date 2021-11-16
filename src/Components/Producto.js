import { Component } from "react";
import '../css/estilos.css'

class Boton extends Component {
    render(){
        return(
          <input type="Button" onClick={this.props.onClick} value={this.props.value} className={this.props.className}></input>
        )
    }
}

class Producto extends Component {
    render(){
        const {productos, agregarcarrito}=this.props
        return(
        <div className="card">    
         <img className="imagen" src={productos.Image}></img>
         <p className="titulo">{productos.Name}</p>
         <p className="precio">{productos.Price}</p>
         <Boton className="boton" onClick={()=>agregarcarrito(productos)} value="Agregar al carrito"></Boton>
        </div>
        )
    }
}
export default Producto
