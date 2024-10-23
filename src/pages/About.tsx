import { Accordion, AccordionItem } from "@nextui-org/react";

const About = () => {
    const vision = "Ser el líder en comercio electrónico ofreciendo una experiencia de compra personalizada, rápida y segura. Aspiramos a conectar a nuestros clientes con las mejores marcas, productos y ofertas del mercado.";
    const compromise = "En ACME Shop, nos comprometemos con la satisfacción de nuestros clientes. Creemos en la transparencia, la atención al cliente y en ofrecer productos de calidad respaldados por un excelente servicio postventa."
    return (
        <>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Acerca de Nosotros</h1>
                <p className="mb-4 text-lg">
                    En <b>ACME Shop</b>, somos más que una simple tienda en línea. Nos dedicamos a ofrecer una experiencia de compra única, brindando una amplia selección de productos de alta calidad a precios accesibles. Nuestro objetivo es satisfacer las necesidades de nuestros clientes, con un enfoque en la comodidad y eficiencia en el proceso de compra.
                </p>
                <p className="mb-4 text-lg">
                    Fundada en [año de fundación], nuestra tienda en línea ha crecido hasta convertirse en un destino de confianza para miles de clientes. Nos enorgullece trabajar con los mejores proveedores para ofrecer productos que mejoran la vida cotidiana, desde ropa y accesorios, hasta tecnología de última generación.
                </p>

                <Accordion variant="splitted">
                    <AccordionItem key="1" aria-label="Accordion 1" title={<strong>Vision</strong>}>
                        {vision}
                    </AccordionItem>

                    <AccordionItem key="2" aria-label="Accordion 1" title={<strong>Compromiso</strong>}>
                        {compromise}
                    </AccordionItem>
                </Accordion>

            </div>
        </>
    );
};

export default About;
