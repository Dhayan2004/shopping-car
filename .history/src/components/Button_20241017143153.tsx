import { useState } from "react"

const Button=()=>{
    const [nameStudent, setNameStudent] = /*Hook*/useState('Rafael'); 
    return(
        <>
        {/*<>Main Tags</> */}
        {console.log(nameStudent)}
        <button type="button" className="btn btn-primary">Primary</button>
        </>
    )
}

export default Button