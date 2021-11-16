import { Component } from "react";
import "../css/estilos.css"
class Detalles extends Component{
    render(){
        const {productos}=this.props
        console.log(productos)
        return(
             <div className="DetallesProducto">
                 <ul>
                     {productos.map(prod => 
                        <li key={prod.Name}>
                        <img className="Prod-detalles" src={prod.Image}></img>
                        <div className="SeccionDescrip">
                        <p>{prod.Name}</p>
                        <p>{prod.Price}</p>
                        <p>{prod.cantidad}</p>
                        </div>
                         </li>     
                     )
                     }
                    
                 </ul>
             </div>
            )
    }
}

export default Detalles;