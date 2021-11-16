import { Component } from "react";
import Producto from './Producto'
class Productos extends Component {
    render(){
        const {Productos, AgregarCarrito}=this.props
        return(
          <div className="padre">
            {Productos.map(prod=>
             <Producto key={prod.Name} productos={prod} agregarcarrito={AgregarCarrito}/>  
            )}
          </div>
        )
    }

}

export default Productos