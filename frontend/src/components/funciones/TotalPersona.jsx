export default function CalcTotalByPerson({year, budget, total, Axel = false}){

    const budgetpersonal = Object.values(budget.DetallePresupuesto).reduce((final, act) =>{            
        if (Axel) {
            if(act.Año == year && act.integrante == "Axel"){            
                final = final + parseFloat(act.Monto)
            }
        }else{
            if(act.Año == year && act.integrante != "Axel"){
                final = final + parseFloat(act.Monto)
            }
        }
        return final
    }, 0)    
    
    return ((budgetpersonal / total) * 100)
}