import React, { Fragment, useState } from "react";
import Platillo from "./components/Platillo";
import Car from "./components/Car";
import "./styles/styles.css";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import {Inicio } from './pages/Inicio';
import {MenuRapido} from './pages/MenuRapido';
import {Envios} from './pages/Envios';
/* import Brocheta from "./images/brocheta.png";
import Guisado from "./images/Guisado.png";
import Pan from "./images/pan.png";
import Sandwich from "./images/sandwich.png";
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


  {/*         <div className="cartDiv">
            <Car car={car} setCar={setCar} />
          </div> */}
        </section>


        <Routes>
        <Route path="/Envio" element={<Envios/>} />
        <Route path="/" element={<Inicio/>} />
        <Route path="/MenuRapido" element={<MenuRapido/>} />
        </Routes>
     
        <section className="content">

        </section>


        <section className="footer">
          <p>HAMMERHEAD RESTAURANT</p>
        </section>
        
      </section>
    </Fragment>
  );
}

export default App;