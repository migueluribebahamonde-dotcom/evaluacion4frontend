import { Fragment } from "react"


const ListaItem = (props) =>{
    return(
        <Fragment>
            <li className='list-group-item d-flex justify-content-between'>
            {props.item.tarea}
            <input type='checkbox' className='form-chequed-input ms-2' checked={props.item.estado}></input>
            </li>
        </Fragment>
    );
};

export default ListaItem;