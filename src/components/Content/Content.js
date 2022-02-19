import React, { useState } from "react"
import Botones from "../Botones/Botones";
import Informacion from "../Informacion/Informacion";

import "./style.css"

export default function Content() {

    const [contador, setContador] = useState(0) //hook
    
    const disminuir = () => {
        if (contador <= 0) {
            contador = 0;
        }
        setContador(contador - 1)
    }
    const aumentar = () => {
        setContador(contador + 1)
    }

    return (
        <div className="contenedor">
            <Informacion valor={contador} />
            <Botones fnAumentar={aumentar} fnDisminuir={disminuir} />
        </div>
    )
}
