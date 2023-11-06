import Años from "./Años";

export default function Operacion ({budget}){
    const years = Años({budget})
    console.log(years)
    let Añototal = 0
    years.map(año => {
        const sum = Object.values(budget.DetallePresupuesto).reduce((final,act) => {
            if (act.Año == año) {
                if (parseFloat(act.Monto) > 0) {
                    return parseFloat(final) + parseFloat(act.Monto)
                }
                return final
            }
            return final
        } , 0)
        
        Añototal += sum
    })
    return Añototal
}