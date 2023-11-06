import { useState, useEffect } from "react"
import ConvDolls from "./ConvDolls"
import Input from "./Input"

export default function FinalAbstract({title, total}){
    const [conversion, setConversion] = useState([])    

    useEffect(() =>{
        if (conversion.length == 0 ) {
            ConvDolls().then((response) => setConversion(response.reduce((final, act) => {                          
                return act
            }, 0)))
        }
    }, [conversion])    
    return (
        <div >
            <div >
                {title}
            </div>
            <div>
                <Input  helperText={"Pesos"} type="number" additionals={{readOnly:true}} value={parseFloat(total).toFixed(2)} ></Input>
                <Input  helperText={"Dolares"} additionals={{readOnly:true}} type="number" value={parseFloat(total / conversion).toFixed(2)}></Input>
            </div>
        </div>
    )
}