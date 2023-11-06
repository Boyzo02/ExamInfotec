export default function Años({budget}){        
    var start = budget.AñoStart
    var end = budget.AñoEnd
    let lapso = []
    while (start <= end) {        
        lapso.push(start)
        start++
    }    
    return lapso
}