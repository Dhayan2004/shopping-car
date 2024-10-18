import { useEffect, useState } from "react"
const
const Home = () => {
    const [data, setData] = useState([])
    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products/')
        const json = await response.json()
        setData(json);
    }
    useEffect(() => {
        getProducts();
        console.log(data)
    }, [])
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {data.map((product) => (
                        <div key={product.id} className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">${product.price}</small>
                                        </p>
                                        <button className="btn btn-primary">Agregar a Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Home