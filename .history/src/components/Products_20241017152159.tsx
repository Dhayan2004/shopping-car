import { useEffect, useState } from "react"

const Products = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    if (loading) return (<h1>Cargando datos</h1>);

    //useEffect = Realizan acciones cuando los componentes tengan un cambio y se implementan con funciones flecha
    useEffect(() => {
        /* Funciones asincronas permiten cargar independient */
        const showProducts = async () => {
            try {
                /*Las funciones asincronas devuelven promesas 
                await es un ejemplo de promesa*/
                const response = await fetch('https://fakestoreapi.com/products/')
                /* fetch consume la informacion */
                /*Indicamos que vamos a recibir un formato json*/
                const result = await response.json()
                setProduct(result)
                setLoading(false)

            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        }
        showProducts();
    }, [])

    return (
        <>
            {
                products.map((item, index)=>{
                    <h2>{item. }</h2>

                })
            }
        </>
    )
}
export default Products