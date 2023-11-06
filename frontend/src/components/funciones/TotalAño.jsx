export default function TotalAño({year, budget}){
    console.log(budget)
    const budgetYears = Object.values(budget.DetallePresupuesto).reduce((final, act) => act.Año == year ? parseFloat(act.Monto) && final + parseFloat(act.Monto): final, 0)    
    return budgetYears
}