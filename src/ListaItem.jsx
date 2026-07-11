import { Fragment } from "react"


const ListaItem = (props) =>{
    return(
        <Fragment>
            
            <td className="text-center">
                {props.registro.nombreMaterial}
            </td>
            <td className="text-center">
                {props.registro.categoria}
            </td>
            <td className="text-center">
                {props.registro.cantidad}
            </td>
            <td className="text-center">
                {props.registro.precio}
            </td>
            <td className="text-center">
                {props.registro.proveedor}
            </td>
            <td>
                {props.registro.estado}
            </td>
            <td className="text-center">
                <button className="btn btn-danger" onClick={() => props.eliminarRegistro(props.registro.id)}>
                    <i className="bi bi-trash-fill"></i>
                </button>
                <button className="btn btn-warning" onClick={() => props.editarRegistro(props.registro.id)}>
                    <i className="bi bi-pencil-fill"></i>
                </button>
            </td>

        </Fragment>
    );
};

export default ListaItem;