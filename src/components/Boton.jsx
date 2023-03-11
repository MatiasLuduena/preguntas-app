const Boton = ({seleccionado, setSeleccionado, texto}) => {
    return(
        <button 
            className={ seleccionado === texto ? "respuestas respuestas-seleccionado" : " respuestas"}
            onClick={() => setSeleccionado(texto)}
        >
            { texto }
        </button>
    );
};

export default Boton;