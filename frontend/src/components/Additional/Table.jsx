import React, {useState, useEffect} from "react";
import Años from "../funciones/Años";
import TotalAño from "../funciones/TotalAño";
import Input from "../Input";


export default function Table({budget, handleChange, desactivar = false}){
    const [lapso, setLapso] = useState([])
    const columns = ['Ahorro de', ...lapso]
    console.log(lapso)
    const Ahorro = [
        {
            id:"1",
            integrante:"Axel"
        },
        {
            id:"2", 
            integrante:"Iliana"
        },
        {
            id:"3", 
            integrante:"David"
        },
        {
            id:"4", 
            integrante:"Alexis"
        },
        {
            id:"5", 
            integrante:"Raul"
        }
    ]

    useEffect(()=>{
        setLapso(Años({budget}))
    }, [budget])    
    return(
        <div>
            <table>
                <thead>
                    {
                        columns.length > 0 &&
                        columns.map((value, i) => {
                            return (
                                <th key={i}>{value}</th>
                            )
                        })
                    }
                    
                </thead>
                <tbody>
                    {
                        Ahorro.length > 0 &&
                        Ahorro.map(({integrante, i}) => {
                            return(
                                <tr>
                                    <td key={i}> 
                                        {integrante}
                                    </td>
                                    {
                                        lapso.map(year => {
                                            var Budget = Object.values(budget.DetallePresupuesto).filter((budget) => (budget.Año == year && budget.Integrante == integrante)).map((budget) => budget)
                                            return (
                                                <td>
                                                    
                                                    <Input 
                                                        handleChange={handleChange}
                                                        defaultValue={(Budget[0] && Budget[0].Monto)}
                                                        key={year+"-"+integrante}
                                                        additionals={{"data-year":year, "data-persona":integrante, "placeholder":0, desactivar:desactivar}}
                                                    />
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                        <tr>
                            <td>Total Anual</td>                    
                            {
                                lapso.length > 0 &&
                                lapso.map(year => {                         
                                    return <td>{parseFloat(TotalAño({'año': year, budget})).toFixed(2)}</td>
                                })
                            }            
                        </tr>   
                </tbody>
            </table>
        </div>
    )
}