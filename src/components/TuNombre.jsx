const TuNombre = ({name, setName}) => {
  return (
    <div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Escribe tu nombre para comenzar</label>
            <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
        </div>
        <button className="btn btn-success" onClick={() => setName("Si")}>COMENZAR</button>
    </div>
  );
}

export default TuNombre;