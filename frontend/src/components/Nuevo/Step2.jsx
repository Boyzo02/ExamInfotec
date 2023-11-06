import React, { useEffect, useState } from "react";
import Table from "../Additional/Table";
import Operacion from "../funciones/Operacion";
import Input from "../Input";

export default function Step2 ({budget, setBudget, setDesactivar}){

    const [monto, setMonto] = useState(true)

    const handleChange = (e) =>{
        console.log(e)
        const budgetFilter = budget.DetallePresupuesto.filter((budget) => (budget.Año == e.target.dataset.year && budget.Integrante == e.target.dataset.integrante) && budget)
        console.log(budgetFilter)



        if (budgetFilter && budgetFilter.length > 0) {
            const cargarBudget = budget.DetallePresupuesto.map((budget) => {
                if (budget.Año == e.target.dataset.year && budget.Integrante == e.target.dataset.integrante) {
                    console.log(e)
                    return{...budget, Monto:e.target.value}  
                }
                                
                return budget
            })
            setBudget({
                ...budget, ['DetallePresupuesto']:cargarBudget
            })
        }else{
            setBudget({
                ...budget, ['DetallePresupuesto']:
                [...budget.DetallePresupuesto,{
                    ['Monto']:(e.target.value > 0 ? e.target.value : 0),
                    ['Año']:e.target.dataset.year,
                    ['Integrante']:e.target.dataset.integrante
                }]
            })
        }
        setMonto(true)
    }
    useEffect(() =>{
        if (budget.total && budget.total < 1) {
            setDesactivar(true)
        }else{
            setDesactivar(false)
        }
        if (monto) {
            setBudget({...budget, ['Total']: Operacion({budget})})
            setMonto(false)
        }
    }, [monto, budget])


    return (
        <div className="container">
            <div className="row">
                <h2 pagina={2}>Ahorro familiar</h2>
                <Table budget={budget} handleChange={handleChange}/> 
                <div className="container">
                    <Input label={'Total ahorro:'} defaultValue={budget.Total && budget.Total} value={budget.Total && budget.Total}></Input>
                </div>
            </div>
        </div>
    )
}