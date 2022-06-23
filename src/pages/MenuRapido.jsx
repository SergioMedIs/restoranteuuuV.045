import { useEffect, useState } from "react";
import React from "react";
import Platillo from "../components/Platillo";
import Car from "../components/Car";
import Brocheta from "../images/brocheta.png";
import Guisado from "../images/Guisado.png";
import Pan from "../images/pan.png";
import Sandwich from "../images/sandwich.png";


export function MenuRapido (){

    const [platillos, setPlatillos] = useState([
        { id: 5, image: Brocheta, nombre: "Brocheta Crujiente", precio: 250 },
        { id: 2, image: Guisado, nombre: "Guisado de Res", precio: 180 },
        { id: 3, image: Pan, nombre: "pan tostado con bolas de arroz", precio: 150 },
        { id: 4, image: Sandwich, nombre: "sandwich tostado de res", precio: 200 },
    
      ]);
    
      const [car, setCar] = useState([]);

return(
<>



          <div className="carDiv">
            <Car car={car} setCar={setCar} />
          </div>  
          <div className="text-w">
            <h3 className="inicio">Bienvenido a HammerHead</h3>
          </div>

          <div className="listplatillos">
            {platillos.map((platillo) => (
              <Platillo
                key={platillo.id}
                platillo={platillo}
                car={car}
                setCar={setCar}
                platillos={platillos}
              />
            ))}
          </div>


</>

    )}

export default MenuRapido
