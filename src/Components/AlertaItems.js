import { Component } from "react";

class AlertaItems extends Component {
    render(){
        const {Items}= this.props
        const Cantidades=Items.map(e=>e.cantidad)
        let cantidad=Cantidades.reduce((acc,i)=>{
           return acc+i
        },0)
        console.log(cantidad)
        return(
            <div className="divAlertas">
            <p className="AlertaProductos">
               <span className="NumeroProducto">{cantidad>=10 ? "9+" : cantidad}</span> 
            </p>
            </div>
            )
    }
}

export default AlertaItems;