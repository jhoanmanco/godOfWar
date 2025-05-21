import React, { useState, useEffect } from "react";
import styles from "@/styles/EncuestaGOW.module.css";

export default function Enemies({
    titulo = "Mundos",
    eleccionEnemies = [
    {nameE: "Minotaurus", imagen: "/images/minotauro.jpg",descripcion: "hola a todos" },
    {nameE: "Medusa", imagen: "/images/medusa.jpg",descripcion: "hola a todos"},
    {nameE: "titanes",imagen: "/images/titanes.jpg",descripcion: "hola a todos"},
    {nameE: "Arpías",imagen: "/images/arpia.jpg",descripcion: "hola a todos"}
  ],selectedEnemies,
}) {

    const handleEnemieClick = (nameE) => {
        selectedEnemies(nameE);
    };



  return (
    <div>
        <h1>{titulo}</h1>
      {eleccionEnemies.map((item, index) => (
        <button key={index} onClick={() => handleEnemieClick(item)}>
          <p>{item.nameE}</p>
        </button>
      ))}
    </div>
  );
}
