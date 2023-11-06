import Años from "./components/funciones/Años";
import TotalAño from "./components/funciones/TotalAño";
import TotalPersona from "./components/funciones/TotalPersona";

export default function TablaFinal ({budget}){
    const years = Años ({budget})
    const columns = ['Año', '% Ahorro propio', '% Ahorro familiar', 'Total ahorro']
    console.log(years)

    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map((columna, i) => {
                            return <th key={i}>{columna}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        years.map((year,i) =>{
                            let total = parseFloat(TotalAño({'year': year, budget})).toFixed(2)
                            
                            return (
                                <tr>
                                    <td key={i}>{year}</td>
                                    <td key={i+'mio'}>%{parseFloat(TotalPersona({'year':year, budget, total, propio:true})).toFixed(2)}</td>
                                    <td key={i+'others'}>%{parseFloat(TotalPersona({'year':year, budget,total})).toFixed(2)}</td>
                                    <td key={i+'total'}>%{total}</td>
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
    )
}
