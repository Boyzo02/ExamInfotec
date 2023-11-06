import React, { useState } from "react";
import Step1 from "./components/Nuevo/Step1";
import Step2 from "./components/Nuevo/Step2";
import Abstract from "./components/Nuevo/Abstract";
import Button from "./components/Button";
import SendBudget from "./components/SendBudget";


export default function NewBudget(){
    
    const [paso, setPaso] = useState(1)
    const [errors, setErrors] = useState({}) 

    const [budget, setBudget] = useState({
        AñoStart:"",
        AñoEnd:"",
        DetallePresupuesto:[],
        DateActual: (new Date).toJSON()
    })
    const [desactivar, setDesactivar] = useState(true)

    const steps =[
        {pagina: 1, titulo: "Años", content: <Step1 setDesactivar={setDesactivar} budget={budget} setBudget={setBudget}/>},
        {pagina: 2, titulo: "Ahorro por familia", content: <Step2 setDesactivar={setDesactivar} budget={budget} setBudget={setBudget}/>},
        {pagina: 3, titulo: "Resumen", content:<Abstract setDesactivar={setDesactivar} budget={budget} setBudget={setBudget}/>}
    ]
    
    let maxSteps = steps.length
    return(
        <div>
            {
                steps.filter(step => step.pagina == paso).map((step, i) =>{
                    return step.content
                })
            }
            <div className="container">
                <div className="row">
                    <div>
                        <Button handleClick={
                                () => {
                                    if(paso > 1) {
                                        return setPaso(paso - 1)
                                    }
                                }
                            }>
                        Atras
                        
                        </Button>
                        <Button desactivar={desactivar} handleClick={() =>{
                            if (paso < maxSteps) {
                                return setPaso(paso + 1)
                            }else{
                                if (alert("¿ESTÁS SEGURO DE TERMINAR?")) {
                                    console.log(SendBudget({data:budget, endpoint:'budget'}))
                                }
                            }
                        }}>
                            {paso < maxSteps ? "Siguiente" : "Terminar"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}





// import React, {Component} from "react";
// import './App.css';
// import Step1 from "./componets/step1";
// import Step2 from "./componets/step2";
// class NewBudget extends Component{

    

//     step (){
//         this.data = this.data+1;
//     }


//     inicioRef = React.createRef();
//     finRef = React.createRef();
//     nombreRef = React.createRef();

//     state = {
//         presupuesto:{}
//     };

//     sendata = (e) => {
//         e.preventDefault();

//         var presupuesto = {
//             nueva: this.inicioRef.current.value,
//             ultima: this.finRef.current.value,
//             nombre: this.nombreRef.current.value
//         }

//         this.setState({
//             presupuesto:presupuesto
//         });

//         alert('Datos enviados');
//         console.log(presupuesto);
//     }

//     render(){
    
//         if(this.state.presupuesto.nueva){
//             var presupuesto = this.state.presupuesto;
//         }

//         const grid = (this.state.presupuesto);


//         return(
//             <div className="App-header">
//                 <div>
//                     {console.log(this.props)}
//                     <p>Defina los años para los cuales quiere generar su presupuesto.</p>
//                     <form onSubmit={this.sendata}>
//                         <div>
//                             <p>Nombre: <input type='text' name="nombre" ref={this.nombreRef}/> </p>                 
//                         </div>  
//                         <div>
//                             <p>Año inicio: <input type='number' max={2030} min={2000} name="inicio" ref={this.inicioRef}/> </p>                 
//                         </div>  
                        
//                         <div>
//                             <p>Año fin: <input type='number' max={2030} min={2000} name="fin" ref={this.finRef}/> </p>                                                 
//                         </div>  
//                         <a href="/ahorro"><input className="submit-button" type="" value='Siguiente' onClick={this.data}/></a>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }
// export default NewBudget;