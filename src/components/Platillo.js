import React from "react";
import "../styles/styles.css";
import MenuRapido from "../pages/MenuRapido";



const Platillo = ({ platillo, car, setCar, platillos }) => {
  const { nombre, image, precio, id } = platillo;
  const addPlatillo = (id) => {
    const platillo = platillos.filter((platillo) => platillo.id === id);
    setCar([...car, ...platillo]);
    console.log(car.length);
  };
  const delPlatillo = (id) => {
    const platillos = car.filter((platillo) => platillo.id !== id);
    setCar(platillos);
  };

  return (
    <ul className="platillos">
      <img className="platillos_image" src={image}></img>
      <li className="platillos_nombre">{nombre}</li>
      <li className="platillos_precio">${precio}</li>
      {platillos ? (
        <button
          className="platillos_btnAdd"
          type="button"
          onClick={() => addPlatillo(id)}
        >
          Agregar 
        </button>
      ) : (
        <div>
          <button
            className="platillos_btnDel"
            type="button"
            onClick={() => delPlatillo(id)}
          >
            Eliminar
          </button>
          <button
            className="platillos_btnAdd"
            type="button"
            onClick={() => delPlatillo(id)}
          >
            <a href="./Envios">Confirmar</a>
          </button>
        </div>
      )}
    </ul>
  );
};

export default Platillo;
