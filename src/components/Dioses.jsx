
import React, { useState, useEffect } from "react";
import styles from "@/styles/EncuestaGOW.module.css";

export default function Dioses({
  titulo = "encuesta de god of war",
  eleccionGOD = [
    {nameG: "Zeus", imagen: "/images/zeus.jpg",descripcion: "El rey del Olimpo, señor de los cielos y el rayo. Su voluntad es ley, su traición, leyenda."},
    {nameG: "Hades", imagen: "/images/hades.jpg",descripcion: "Regente del inframundo. Guarda las almas de los caídos con puño de hierro y sed de poder eterno." },
    {nameG: "Kratos",imagen: "/images/kratos.jpg",descripcion: "El Fantasma de Esparta. Ex-guerrero de los dioses, consumido por la ira, renacido como leyenda."},
    {nameG: "Hermes",imagen: "/images/hermes.jpg",descripcion: "El mensajero veloz, maestro del engaño. Sus pasos no se oyen, pero su impacto es mortal."}
  ],
  selectedGod,
}) {

  const handleGODClick = (nameG) => {
    const audio = new Audio("/sounds/buttonSound.mp3");
    audio.play();
    selectedGod(nameG);
};

  return (
    <div>
      <h1>{titulo}</h1>
        <div>
          {eleccionGOD.map((item, index) => (
          <button className={styles.button} key={index} onClick={() => handleGODClick(item)}>
            <p>{item.nameG}</p>
          </button> 
        ))}
        </div>

        
    </div>
  );
}
