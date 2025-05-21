
import React, { useState, useEffect } from "react";
import styles from "@/styles/EncuestaGOW.module.css";

export default function Dioses({
  titulo = "encuesta de god of war",
  eleccionGOD = [
    {nameG: "Zeus", imagen: "/images/zeus.jpg",descripcion: "Me gusta el incesto"},
    {nameG: "Hades", imagen: "/images/hades.jpg",descripcion: "hola a todos" },
    {nameG: "Kratos",imagen: "/images/kratos.jpg",descripcion: "hola a todos"},
    {nameG: "Hermes",imagen: "/images/hermes.jpg",descripcion: "hola a todos"}
  ],
  selectedGod,
}) {

  const handleGODClick = (nameG) => {
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
