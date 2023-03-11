import { useState } from "react";

import Preguntas from "./components/Preguntas";
import { preguntas } from "./preguntas";

function App() {
  const [indicePregunta, setIndicePregunta] = useState(0);

  return (
    <div className="fondo">
      <div className="container">
        <h1 className="h5 text-center pt-2">Preguntas para un trabajo de Marketing</h1>
        <h2 className="h6 text-center">Sus respuestas son anónimas</h2>

        {
          indicePregunta === preguntas.length ? (
            <div>
              <h3 className="text-center mt-5">¡LISTO, GRACIAS POR TU TIEMPO!</h3>
            </div>
          ) : (
            <Preguntas preguntas={preguntas} indicePregunta={indicePregunta} 
            setIndicePregunta={setIndicePregunta} />
          )
        }
      </div>
    </div>
  );
}

export default App;
