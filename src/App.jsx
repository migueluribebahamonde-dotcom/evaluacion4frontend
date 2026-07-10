import { Fragment, useState, useRef } from 'react'
import ListaItem from './ListaItem.jsx'

const App = () =>{
  const [tareas, setTareas] = useState([
    {id: 1, tarea: 'tarea 1', estado: false},
    {id: 2, tarea: 'tarea 2', estado: true},
    {id: 3, tarea: 'tarea 3', estado: false},
    {id: 4, tarea: 'tarea 4', estado: true},
  ])
  const agregarTarea = () =>{
    const tarea = tareaRef.current.value.trim();
    if(tarea == '') return;
    setTareas((prevTodos) =>{
      const nuevaTarea ={
        id:prevTodos.length + 1,
        tarea: tarea,
        estado: false
      }
      return [...prevTodos, nuevaTarea]
    
    })
    tareaRef.current.value = null;
  };

  //Definir tareaRef
  const tareaRef = useRef();

  return(
    <Fragment>
      <h1 className="display-5">
      lista de tareas</h1>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0 d-flex align-items-center">
                <i className="bi bi-tools"></i>
                <span className="flex-grow-1 text-center">Agregar instancia al inventario</span>
                <i className="bi bi-tools"></i>
              </h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                <label className='form-label'>Nombre del material</label>
                <input type='text' className='form-control' placeholder="Ingrese un nombre..."></input>
                </div>
                <div className="mb-3">
                <label className='form-label'>Categoría</label>
                  <select className="form-select">
                    <option>Seleccione una categoría</option>
                    <option value='Madera'>Madera</option>
                    <option value='Albañilería'>Albañilería</option>
                    <option value='Aislante'>Aislante</option>
                    <option value='Fijaciones'>Fijaciones</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Cantidad en stock</label>
                  <input className="form-control" type="number" placeholder="Ingrese la cantidad..."></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Precio unitario</label>
                  <input className="form-control" type="number" placeholder="Ingrese el precio..."></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Proveedor</label>
                  <input className="form-control" type="text" placeholder="Ingrese el proveedor..."></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Estado</label>
                  <select className="form-select">
                    <option>Seleccione un estado</option>
                    <option value='Disponible'>Disponible</option>
                    <option value='Bajo stock'>Bajo stock</option>
                    <option value='Sin stock'>Sin stock</option>
                  </select>
                </div>
                <button type="sumbit" className="btn btn-success w-100">
                  <i class="bi bi-send-plus-fill me-2"></i>
                  Añadir al inventario
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card shadow mb-3">
            <div className="card-body">
              <label class="form-label">Buscar en el inventario</label>
              <input class="form-control" type="text" placeholder="Buscar por nombre del material o por proveedor..."></input>
            </div>
          </div>
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0 d-flex align-items-center">
                <i class="bi bi-file-spreadsheet"></i>
                <span className="flex-grow-1 text-center">Inventario registrado</span>
                <i class="bi bi-file-spreadsheet"></i>
              </h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr className="align-middle">
                      <th className="text-center">Nombre del material</th>
                      <th className="text-center">Categoría</th>
                      <th className="text-center">Cantidad en stock</th>
                      <th className="text-center">Precio unitario</th>
                      <th className="text-center">Proveedor</th>
                      <th className="text-center">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan ="7" class="text-center text secondary py-5">
                        <i className="bi bi-emoji-tear fs-1">
                        </i>
                        <br></br>
                        El inventario está vacío
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>  
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;