import React from "react";

export default function Step1({budget, setBudget}){
    
    return(
        <div className="container">
            <div className="row">
                <h2 pagina={1}>¿A cuantos años desea su presupuesto?</h2>
                <div>
                <p>Año inicio: <input type='number' min={2000} max={2030} name="AñoStart" value={(budget && budget.AñoStart) && budget.AñoStart}  onChange={(e) => setBudget({...budget, [e.target.name]:e.target.value})}/> </p>     
                <p>Año fin: <input type='number' min={2000} max={2030} name="AñoEnd" value={(budget && budget.AñoEnd) && budget.AñoEnd} onChange={(e) => setBudget({...budget, [e.target.name]:e.target.value})}/> </p>            
                </div>
            </div>
        </div>
    )
}