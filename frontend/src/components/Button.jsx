export default function Button({children, className = "", handleClick = null, desactivar=false}){
    return(
        <button desactivar={desactivar} onClick={handleClick} className={`border border-gray-700 rounded-md px-4 py-1 ${className}`}>{children}</button>
    )
}