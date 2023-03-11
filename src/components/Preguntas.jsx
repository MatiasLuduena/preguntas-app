import { useState } from "react";

// components
import Boton from "./Boton";
import TuNombre from "./TuNombre";

const Preguntas = ({preguntas, indicePregunta, setIndicePregunta}) => {
    const [seleccionado, setSeleccionado] = useState(null);
    const [name, setName] = useState(undefined);

    return(
        <div className="mt-4">
            { name === undefined ? (<TuNombre name={name} setName={setName} />) : (
                <div>
                    <p className="text-end">Pregunta {indicePregunta + 1} de {preguntas.length}</p>

                    <p className="pregunta">{ preguntas[indicePregunta].pregunta }</p>

                    <div className="d-flex flex-column">
                        { preguntas[indicePregunta].respuestas.map((item, index) => (
                            <Boton
                                seleccionado={seleccionado} setSeleccionado={setSeleccionado}
                                texto={item} key={index}
                            />
                        ))  }
                    </div>

                    <div className="d-flex justify-content-end mt-1">
                        <button 
                            className={indicePregunta === 0 ? "btn btn-danger m-2 disabled" : "btn btn-danger m-2"}
                            onClick={() => setIndicePregunta(indicePregunta - 1)}
                        >
                            ATRÁS</button>
                        <button 
                            className={seleccionado === null ? "btn btn-primary m-2 disabled" : "btn btn-primary m-2"}
                            onClick={() => setIndicePregunta(indicePregunta + 1)}
                        >SIGUIENTE</button>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default Preguntas;