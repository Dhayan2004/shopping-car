/*Mediante interfaces*/
interface ButtonProps{
    /*Attributos que los componentes pueden cambiar*/
    description:string,
    disable:boolean,

}
const ButtonProps = ({description,}) => {
    /*description está recibiendo los tipos de datos que está recibiendo el componente*/
    return (
        <>
        <h1>Uso de Props</h1>
        </>

    )
}

export default ButtonProps