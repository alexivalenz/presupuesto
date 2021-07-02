import React, {useState} from 'react';
import Error from './Error';
import ids from 'short-id';
const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    
    const agregarGasto = e => {
        e.preventDefault();
        
        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '')
        {
            guardarError(true);
            return;
        }
        guardarError(false);
        
        
        //Construir el gasto
        const gasto = {
            nombre, 
            cantidad, 
            id: ids.generate()
        }
        
        //Pasar el gasto al componente principal
        
        
        //resetear el form
    }
    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto"/> : null}
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value,10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            ></input>
        </form>
     );
}
 
export default Formulario;