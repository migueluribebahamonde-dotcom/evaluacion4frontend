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

        </Fragment>
    );
};

export default ListaItem;