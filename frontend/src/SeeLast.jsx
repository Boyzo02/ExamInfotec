import React, { useEffect, useState } from "react";
import Operacion from "./components/funciones/Operacion";
import FinalAbstract from "./components/FinalAbstract";
import TablaFinal from "./TablaFinal";
import Table from "./components/Additional/Table";
import UltimoBudget from "./components/UltimoBudget";
export default function SeeLast(){
    const [budget, setBudget] = useState({})
    const [ultimo] = useState()
    useEffect(() =>{
        if (Object.values(budget).length < 1) {
            UltimoBudget({endpoint:"budget/last"}).then((response) =>{
                setBudget(response.data.data)
            })            
        }                
    }, [ultimo]) 
    console.log(budget)
    return(
        <div className="container">
            <div className="row" >
                <FinalAbstract total={Operacion({budget})}/>
                <TablaFinal budget={budget}></TablaFinal>
                <div>
                    <Table desactivar={true} budget={budget}/>
                </div>
                <a href="/">Volver al inicio</a>
            </div>
        </div>
    )
}