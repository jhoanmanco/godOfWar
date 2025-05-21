import React, { useState, useEffect } from "react";
import styles from "@/styles/EncuestaGOW.module.css";

export default function Worlds({
    titulo = "Mundos",
    eleccionWorld = [
    {name: "Athenas", imagen: "/images/atenas.jpg",descripcion: "hola a todos" },
    {name: "King of hades", imagen: "/images/reinohades.jpg",descripcion: "hola a todos"},
    {name: "Olimpus Mount",imagen: "/images/olimpus.jpg",descripcion: "hola a todos"},
    {name: "Mundo nordico",imagen: "/images/mundo.jpg",descripcion: "hola a todos"}
  ],selectedWorld,
}) {

    const handleWorldClick = (name) => {
        selectedWorld(name);
    };



  return (
    <div>
        <h1>{titulo}</h1>
      {eleccionWorld.map((item, index) => (
        <button key={index} onClick={() => handleWorldClick(item)}>
          <p>{item.name}</p>
        </button>
      ))}
    </div>
  );
}
