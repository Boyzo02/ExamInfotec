import axios from"axios"

export default async function UltimoBudget({endpoint = ""}){
    const api_url = `http://localhost:3000/api/${endpoint}`
    return await axios.get(api_url).then((response) => {
        if (response.code == 200) {
            return ""
        }
        return response
    }).catch((error) => {
        return error
    })
}