import mapboxgl, { Map } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const MapStore = () => {
    const [coordinates, setCoordinates] = useState<{ lng: number, lat: number } | null>(null);
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const myMap = useRef<Map | null>(null);

    // Agregar URL de la imagen a cada tienda
    const stores = [
        { 
            name: "Plazas Outlet", 
            coordinates: [-86.84788080110737, 21.15284304221581], 
            color: "grey",
            imageUrl: "data:image/jpeg;base64,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", // URL de ejemplo, sustituir por una real
        },
        { 
            name: "Las tiendas Cancún", 
            coordinates: [-86.86653118530758, 21.120768553357465], 
            color: "green",
            imageUrl: "https://via.placeholder.com/150", // URL de ejemplo, sustituir por una real
        },
    ];

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiY2FybGdsem0iLCJhIjoiY20yOTFpcWgwMDBrbjJyb215dGcyeXBiZCJ9.LEj7ngvmN67Oi3vasyB_SA";

        if (mapContainer.current) {
            myMap.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [-86.85972543557556, 21.175254648597484],
                zoom: 12.6,
            });

            stores.forEach(store => {
                const marker = new mapboxgl.Marker({ color: store.color })
                    .setLngLat(store.coordinates)
                    .addTo(myMap.current);

                // Agregar imagen en el popup
                const popupContent = `
                    <div style="text-align:center;">
                        <h6>${store.name}</h6>
                        <img src="${store.imageUrl}" alt="${store.name}" style="width: 100px; height: auto; margin-top: 5px;"/>
                    </div>
                `;

                const popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(popupContent); // Usar HTML en lugar de JSX para incluir la imagen
                marker.setPopup(popup);
            });

            const bounds = new mapboxgl.LngLatBounds();
            stores.forEach(store => bounds.extend(store.coordinates));
            myMap.current.fitBounds(bounds, { padding: 50 });

            // Obtener las coordenadas del clic en el mapa
            myMap.current.on("click", (e) => {
                const { lng, lat } = e.lngLat;
                setCoordinates({ lng, lat });
                console.log({ lng, lat });
            });
        }

        return () => {
            if (myMap.current) {
                myMap.current.remove();
            }
        };
    }, []);

    return (
        <div className="container mx-auto my-8 text-center">
            <h1 className="text-2xl font-bold mb-6" style={{ color: '#6D28D9' }}>
                Bienvenido al mapa,<br />
                Aquí encontrarás los productos
            </h1>
            <div className="row">
                <div className="col-12">
                    <div
                        ref={mapContainer}
                        style={{
                            width: "100%",
                            height: "500px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    ></div>
                </div>
            </div>
            {coordinates && (
                <div className="alert alert-info mt-3">
                    <h6>Coordenadas seleccionadas:</h6>
                    <p>Longitud: {coordinates.lng.toFixed(6)}</p>
                    <p>Latitud: {coordinates.lat.toFixed(6)}</p>
                </div>
            )}
        </div>
    );
};

export default MapStore;
