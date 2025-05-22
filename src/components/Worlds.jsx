import React, { useState, useEffect } from "react";
import styles from "@/styles/EncuestaGOW.module.css";

export default function Worlds({
    titulo = "Mundos",
    eleccionWorld = [
    {name: "Athenas", imagen: "/images/atenas.jpg",descripcion: "La ciudad de los sabios y los guerreros, testigo de guerras divinas y mortales." },
    {name: "King of hades", imagen: "/images/reinohades.jpg",descripcion: "Oscuro y eterno, donde las almas penan y el olvido es castigo."},
    {name: "Olimpus Mount",imagen: "/images/olimpus.jpg",descripcion: "Cumbre sagrada de los dioses, donde el poder absoluto se asienta en tronos dorados."},
    {name: "Mundo nordico",imagen: "/images/mundo.jpg",descripcion: "Tierra de runas, mitos y dioses fríos. Un nuevo comienzo lleno de viejos pecados."}
  ],selectedWorld,
}) {

    const handleWorldClick = (name) => {
      const audio = new Audio("/sounds/buttonSound.mp3");
      audio.play();
        selectedWorld(name);
    };



  return (
    <div>
        <h1>{titulo}</h1>
      {eleccionWorld.map((item, index) => (
        <button className={styles.button} key={index} onClick={() => handleWorldClick(item)}>
          <p>{item.name}</p>
        </button>
      ))}
    </div>
  );
}
