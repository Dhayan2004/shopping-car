/*Mediante interfaces*/
interface ButtonProps{
    /*Attributos que los componentes pueden cambiar*/
    description:string,
    disable:boolean,

}
const ButtonProps = ({description, disable}:ButtonProps) => {
    /*description está recibiendo los tipos de datos que está recibiendo el componente*/
    return (
        <>
        <h1>Uso de Props</h1>
        {description}
        </>

    )
}

export default ButtonProps