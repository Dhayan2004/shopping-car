import { useState } from "react"

const Button=()=>{
    const [nameStudent, setNameStudent] = /*Hook*/useState('Carlos'); 
    const showNameStudent = (nameStudent) =>{
        setNameStudent('Sebastián')
    }
    return(
        <>
        {/*<>Main Tags</> */}
        {nameStudent}
        <button type="button" className="btn btn-primary" onClick={showNameStudent}> {name}</button>
        </>
    )
}

export default Button