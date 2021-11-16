import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Productos from './Components/Productos';
import Layout from './Components/Layout';
import Nav from './Components/Nav';

class App extends Component{
  state={
    productos:[
      {Name:"Tomate",Price:"1200",Image:"/img/tomate.jpg"},
      {Name:"Lechuga",Price:"2000",Image:"/img/lechuga.jpg"},
      {Name:"Arbeja",Price:"1200",Image:"/img/arbejas.jpg"}
    ],
    carro:[

    ]
  }
  AgregarCarrito=(producto)=>{
    let existe=false;
    if(this.state.carro != null){
      const productos=this.state.carro
      const index=productos.findIndex(e=>e.Name === producto.Name)
      if(index !=-1){
        productos[index].cantidad+=1;
        existe=true;
        this.setState({...productos})
      }
      if(existe == false){
        return this.setState({
          carro:this.state.carro.concat({...producto,cantidad:1})
        })
      }
      
    }
   
  }

  render() {
  console.log(this.state.carro)
  return (
    <div>
    <Nav Productos={this.state.carro}/>
    <Layout>  
     <Productos Productos={this.state.productos} AgregarCarrito={(this.AgregarCarrito)}/>
     </Layout>
     </div>
    )
  }
}

export default App;
