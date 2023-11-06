import React, {useState, useEffect} from "react";
import Operacion from "../funciones/Operacion";
import TablaFinal from "../../TablaFinal";
import FinalAbstract from "../FinalAbstract";
import ConvDolls from "../ConvDolls";


export default function Abstract({budget, setBudget}){
    const [conversion,setConversion] = useState([])

    useEffect(() =>{
        if (conversion.length == 0 ) {
            ConvDolls().then((response) => setConversion(response.reduce((final, act) => {
                setBudget({...budget, ['ConversionDollar']:act})                
                return act
            }, 0)))
        }
    }, [conversion])
    return(  
        <div>
            <h2 pagina={3}/>
            <FinalAbstract total={Operacion({budget})}/>
            <div>
                <TablaFinal budget={budget}/>
            </div>
        </div>
    )
}