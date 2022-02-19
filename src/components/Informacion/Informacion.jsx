import React from 'react'
import "./style.css";

export default function Informacion(props) {

    const { valor } = props

    return (
        <>
            <h1>Contador</h1>
            <p>{valor}</p>
        </>
    )
}
