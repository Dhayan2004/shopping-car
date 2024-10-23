import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useEffect, useState } from "react";

const ProductsCard = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // Estado para manejar el error

    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/');
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Lanza un error si la respuesta no es correcta
            }
            const json = await response.json();
            if (json.length === 0) {
                setError('No hay productos disponibles'); // Mensaje si no hay productos
            } else {
                setData(json);
            }
        } catch (error) {
            setError('Hubo un problema al cargar los productos: ' + error.message); // Maneja cualquier otro error
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container mx-auto my-8 text-center">
            <h1 className="text-2xl font-bold mb-6" style={{ color: '#6D28D9' }}>
                Bienvenido a nuestra tienda, aquí encontrarás los productos
            </h1>
            {error ? ( // Muestra el mensaje de error si existe
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="gap-8 grid grid-cols-4 sm:grid-cols-4 mx-12">
                    {data.map((product) => (
                        <Card 
                            shadow="sm" 
                            key={product.id} 
                            isPressable 
                            onPress={() => console.log("item pressed")}
                            className="transform transition-transform duration-500 ease-in-out hover:scale-110"
                        >
                            <CardBody className="overflow-visible p-0">
                                <img 
                                    src={product.image}
                                    width="100%"
                                    className="w-full object-cover h-[300px] rounded-sm"
                                    alt={product.title}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{product.title}</b>
                                <p className="text-default-500">${product.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductsCard;
