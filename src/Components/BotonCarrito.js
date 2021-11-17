import { Component } from "react";
import Detalles  from "./Detalles";
import AlertaItems from "./AlertaItems.js"

class BotonCarrito extends Component {
    state={
       Mostrar:false    
   }

   CambiarEstado(){
     if(this.state.Mostrar == false){
       this.setState({Mostrar:true})
     }else{
         this.setState({Mostrar:false})
     }
   }

    render(){
        const {productos}=this.props
        return(
        <>    
        <p className="Carrito" onClick={this.CambiarEstado.bind(this)}>Carro</p>
        <AlertaItems Items={productos}></AlertaItems>  
        {this.state.Mostrar== true ? <Detalles productos={productos}/> : console.log("No se muestra porque no le dieron click", this.state.Mostrar)} 
        
         </>
        )
    }


}

export default BotonCarrito;