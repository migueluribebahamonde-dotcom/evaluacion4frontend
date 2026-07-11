import { Fragment, useState, useRef } from 'react'
import ListaItem from './ListaItem.jsx'

const App = () =>{
  const [registros, setRegistros] = useState([
    {id: 1, nombreMaterial: "Madera de pino", categoria: "Madera", cantidad: 50, precio: 10.5, proveedor: "Proveedor A", estado: "Disponible"},
    {id: 2, nombreMaterial: "Cemento", categoria: "Albañilería", cantidad: 100, precio: 5.0, proveedor: "Proveedor B", estado: "Disponible"},
    {id: 3, nombreMaterial: "Lana de vidrio", categoria: "Aislante", cantidad: 20, precio: 15.0, proveedor: "Proveedor C", estado: "Bajo stock"},
    {id: 4, nombreMaterial: "Tornillos", categoria: "Fijaciones", cantidad: 200, precio: 0.1, proveedor: "Proveedor D", estado: "Disponible"},
    {id: 5, nombreMaterial: "Madera de pino", categoria: "Madera", cantidad: 30, precio: 12.0, proveedor: "Proveedor A", estado: "Bajo stock"},
    {id: 6, nombreMaterial: "Cemento", categoria: "Albañilería", cantidad: 80, precio: 4.5, proveedor: "Proveedor B", estado: "Disponible"},
    {id: 7, nombreMaterial: "Lana de vidrio", categoria: "Aislante", cantidad: 10, precio: 18.0, proveedor: "Proveedor C", estado: "Sin stock"},
    {id: 8, nombreMaterial: "Tornillos", categoria: "Fijaciones", cantidad: 150, precio: 0.15, proveedor: "Proveedor D", estado: "Disponible"},
    {id: 9, nombreMaterial: "Madera de pino", categoria: "Madera", cantidad: 40, precio: 11.0, proveedor: "Proveedor A", estado: "Disponible"},
    {id: 10, nombreMaterial: "Cemento", categoria: "Albañilería", cantidad: 60, precio: 5.5, proveedor: "Proveedor B", estado: "Bajo stock"},
    {id: 11, nombreMaterial: "Lana de vidrio", categoria: "Aislante", cantidad: 15, precio: 16.0, proveedor: "Proveedor C", estado: "Disponible"},
    {id: 12, nombreMaterial: "Tornillos", categoria: "Fijaciones", cantidad: 180, precio: 0.12, proveedor: "Proveedor D", estado: "Disponible"},
    {id: 13, nombreMaterial: "Madera de pino", categoria: "Madera", cantidad: 25, precio: 13.0, proveedor: "Proveedor A", estado: "Sin stock"},
    {id: 14, nombreMaterial: "Cemento", categoria: "Albañilería", cantidad: 90, precio: 4.8, proveedor: "Proveedor B", estado: "Disponible"},
    {id: 15, nombreMaterial: "Lana de vidrio", categoria: "Aislante", cantidad: 5, precio: 20.0, proveedor: "Proveedor C", estado: "Bajo stock"},
    {id: 16, nombreMaterial: "Tornillos", categoria: "Fijaciones", cantidad: 220, precio: 0.08, proveedor: "Proveedor D", estado: "Disponible"},
    {id: 17, nombreMaterial: "Madera de pino", categoria: "Madera", cantidad: 35, precio: 12.5, proveedor: "Proveedor A", estado: "Disponible"},
    {id: 18, nombreMaterial: "Cemento", categoria: "Albañilería", cantidad: 70, precio: 5.2, proveedor: "Proveedor B", estado: "Bajo stock"},
    
  ]);

  const [busqueda, setBusqueda] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);

  //Definir referencias a los elementos del formulario
  const materialRef = useRef();
  const categoriaRef = useRef();
  const cantidadRef = useRef();
  const precioRef = useRef();
  const proveedorRef = useRef();
  const estadoRef = useRef();

  const registrosFiltrados = registros.filter((registro) => {
    const textoBusqueda = busqueda.toLowerCase();
    const nombreMaterial = registro.nombreMaterial.toLowerCase();
    const proveedor = registro.proveedor.toLowerCase();
    return nombreMaterial.includes(textoBusqueda) || proveedor.includes(textoBusqueda);
  });

  const registrosPorPagina = 5;
  const indiceUltimoRegistro = paginaActual * registrosPorPagina;
  const indicePrimerRegistro = indiceUltimoRegistro - registrosPorPagina;
  const registrosActuales = registrosFiltrados.slice(indicePrimerRegistro, indiceUltimoRegistro);
  const totalPaginas = Math.ceil(registrosFiltrados.length / registrosPorPagina);
  
  const agregarRegistro = () =>{
    if (materialRef.current.value.trim() == '' || categoriaRef.current.value.trim() == '' || cantidadRef.current.value.trim() == '' || precioRef.current.value.trim() == '' || proveedorRef.current.value.trim() == '' || estadoRef.current.value.trim() == ''){
      alert('Por favor, complete todos los campos del formulario antes de agregar un registro.');
      return;
    }
    if (isNaN(cantidadRef.current.value) || isNaN(precioRef.current.value)) {
      alert('Por favor, ingrese un valor numérico válido para la cantidad y/o el precio.');
      return;
    }
    if (parseFloat(cantidadRef.current.value) < 0 || parseFloat(precioRef.current.value) < 0) {
      alert('Por favor, ingrese un valor positivo para la cantidad y/o el precio.');
      return;
    }
    const material = materialRef.current.value.trim();
    const categoria = categoriaRef.current.value.trim();
    const cantidad = cantidadRef.current.value.trim();
    const precio = precioRef.current.value.trim();
    const proveedor = proveedorRef.current.value.trim();
    const estado = estadoRef.current.value.trim();
    setRegistros((prevRegistros) =>{
      const nuevoRegistro ={
        id:numeroRegistros + 1,
        nombreMaterial: material,
        categoria: categoria,
        cantidad: cantidad,
        precio: precio,
        proveedor: proveedor,
        estado: estado
      }
      return [...prevRegistros, nuevoRegistro]
    
    })
    materialRef.current.value = null;
  };










  const numeroRegistros = registros.length;

 
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
                <input ref={materialRef} type='text' className='form-control' placeholder="Ingrese un nombre..."></input>
                </div>
                <div className="mb-3">
                <label className='form-label'>Categoría</label>
                  <select ref={categoriaRef} className="form-select">
                    <option>Seleccione una categoría</option>
                    <option value='Madera'>Madera</option>
                    <option value='Albañilería'>Albañilería</option>
                    <option value='Aislante'>Aislante</option>
                    <option value='Fijaciones'>Fijaciones</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Cantidad en stock</label>
                  <input ref={cantidadRef} className="form-control" type="number" placeholder="Ingrese la cantidad..."></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Precio unitario</label>
                  <input ref={precioRef} className="form-control" type="number" placeholder="Ingrese el precio..."></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Proveedor</label>
                  <input ref={proveedorRef} className="form-control" type="text" placeholder="Ingrese el proveedor..."></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Estado</label>
                  <select ref={estadoRef} className="form-select">
                    <option>Seleccione un estado</option>
                    <option value='Disponible'>Disponible</option>
                    <option value='Bajo stock'>Bajo stock</option>
                    <option value='Sin stock'>Sin stock</option>
                  </select>
                </div>
                <button type="sumbit" className="btn btn-success w-100" onClick={agregarRegistro}>
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
              <input 
                class="form-control" 
                type="text" placeholder="Buscar por nombre del material o por proveedor..." 
                value={busqueda} 
                onChange={(e) =>{
                  setBusqueda(e.target.value); 
                  setPaginaActual(1);}}
              />
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
                    {registrosActuales.length === 0 ?(
                      <tr>
                        <td colspan="7" class="text-center text-secondary py-5">
                          <i className="bi bi-emoji-tear fs-1"></i>
                          <br></br>
                          El inventario está vacío
                        </td>
                      </tr>  
                    ):(
                        registrosActuales.map((item) => (
                          <tr key={item.id}> 
                            <ListaItem 
                              registro={item} 
                            />
                          </tr>
                        )
                    )
                  )}
                  </tbody>
                </table>
              </div>
            </div>  
          </div>
          <nav className="mt-3">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setPaginaActual(paginaActual - 1)}>
                  Anterior
                </button>
              </li>
              <li className="page-item disabled">
                <span className="page-link text-dark">
                  Página {paginaActual} de {totalPaginas === 0 ? 1 : totalPaginas}
                </span>
              </li>
              <li className={`page-item ${paginaActual >= totalPaginas ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setPaginaActual(paginaActual + 1)}>
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  )
}

export default App;