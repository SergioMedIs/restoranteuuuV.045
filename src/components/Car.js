import React, { Fragment } from "react";
import Platillo from "./Platillo";
import "../styles/styles.css";
import MenuRapido from "../pages/MenuRapido";



const Car = ({ car, setCar }) => {
  const viewCar = () => {
    {
      document.querySelector(
        "div.carDiv_list"
      ).style.display = "none"
          ? (document.querySelector(
            "div.carDiv_list"
          ).style.display = "flex")
          : (document.querySelector(
            "div.carDiv_list"
          ).style.display = "none");
    }
  };

  const closeDiv = () => {
    document.querySelector(
      "div.carDiv_list"
    ).style.display = "none";
  };

  return (
    <Fragment>
      <div className="carDiv">
        <p className="carDiv_count">{car.length}</p>
        <button
          className="carDiv_btnCar"
          onClick={() => viewCar()}
        ></button>
      </div>
      <div className="carDiv_list">
        <button
          className="platillos_btnClose"
          type="button"
          onClick={() => closeDiv()}
        >
          X
        </button>
        {car.length === 0 ? (
          <p>Agrega para comprar</p>
        ) : (
          car.map((platillo) => (
            <Platillo
              key={platillo.id}
              platillo={platillo}
              car={car}
              setCar={setCar}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};
export default Car;
