import { useEffect, useState } from "react"

const Products = () => {
const [product, setProduct]=useState([])
const [loading, setLoading]=useState(true)
if (loading) return(<h1>Cargando datos</h1>);

//useEffect = Realizan acciones cuando los componentes tengan un cambio y se implementan con funciones flecha
useEffect(()=>{
    /* Funciones asincronas permiten cargar independient */
    const showProducts=async()=>{
        /*Las funciones asincronas devuelven promesas 
        await es un ejemplo de promesa*/
        const response= await
    }

})

    return (
        <>

        </>
    )
}
export default Products