import "./styles.css"

export default function Botones({ fnAumentar, fnDisminuir }) {
    // const {fnAumentar,fnDisminuir} = props
    return (
        <div className="contenedor__button">
            <button className="contenedor__button__aumentar" onClick={fnAumentar}  >Aumentar(+)</button>
            <button className="contenedor__button__dismunir" onClick={fnDisminuir}  >Disminuir(-)</button>
        </div>
    )
}
