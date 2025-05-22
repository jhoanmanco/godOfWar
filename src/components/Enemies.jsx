import React, { useState, useEffect } from "react";
import styles from "@/styles/EncuestaGOW.module.css";

export default function Enemies({
    titulo = "Mundos",
    eleccionEnemies = [
    {nameE: "Minotaurus", imagen: "/images/minotauro.jpg",descripcion: "Bestia de fuerza brutal y hambre insaciable, guardián de los laberintos del castigo." },
    {nameE: "Medusa", imagen: "/images/medusa.jpg",descripcion: "La gorgona condenada. Su mirada petrifica, su furia no conoce piedad."},
    {nameE: "titanes",imagen: "/images/titanes.jpg",descripcion: "Los primordiales. Antiguos como el tiempo, su venganza contra los dioses arde aún."},
    {nameE: "Arpías",imagen: "/images/arpia.jpg",descripcion: "Criaturas aladas que anuncian muerte y roban almas. Gritos que cortan el cielo."}
  ],selectedEnemies,
}) {

    const handleEnemieClick = (nameE) => {
      const audio = new Audio("/sounds/buttonSound.mp3");
      audio.play();
        selectedEnemies(nameE);
    };



  return (
    <div>
        <h1>{titulo}</h1>
      {eleccionEnemies.map((item, index) => (
        <button className={styles.button} key={index} onClick={() => handleEnemieClick(item)}>
          <p>{item.nameE}</p>
        </button>
      ))}
    </div>
  );
}
