import React, { Fragment, useState } from "react";
import Platillo from "./components/Platillo";
import Car from "./components/Car";
import "./styles/styles.css";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { formulario } from "./pages/formulario";
import {MenuRapido} from './pages/MenuRapido';
import { initializeApp } from "firebase/app";


/* import Brocheta from "./images/brocheta.png";
import Guisado from "./images/Guisado.png";
import Pan from "./images/pan.png";
import Sandwich from "./images/sandwich.png";
import { formulario } from './pages/formulario';
 */

function App() {
  const [car, setCar] = useState([]);

  return (
    <Fragment>

      <section className="container">

        <section className="header">

          <div className="header_menu">
            <button className="header_menu-button"></button>
          </div>


          <div className="header_title">
            <h3 className="header_titletext">HammerHead Restaurant</h3>
          </div>



        </section>

{/* 
        <Routes>
        <Route path="/Envio" element={<Envios/>} />
        <Route path="/" element={<Inicio/>} />
        <Route path="/MenuRapido" element={<MenuRapido/>} />
        </Routes> */}
     
        <section className="content">

        </section>
        <section id="reserved">
        <div id="reserva">
              <h3 id="tittle_reserved">Realiza tu reserva</h3>
          <input type="email" placeholder="Correo" name="" id="registro-email" />
          <input type="text" placeholder="Nombre"/>
          <input type="number" placeholder="Mesa" name="" id="" />
          <input type="date" name="" id="fecha" />
          <button id="Save-app">Guardar</button>

        
 
            </div>


        </section>

        <section className="footer">
          <p>HAMMERHEAD RESTAURANT</p>
        </section>
        
      </section>
    </Fragment>


  );
}

export default App;
