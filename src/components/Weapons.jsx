import React, { useState, useEffect } from "react";
import styles from "@/styles/EncuestaGOW.module.css";

export default function Weapons({
    titulo = "Armas",
    eleccionWeapons = [
    {weapon: "Espada caos", imagen: "/images/espadasCaos.jpg",descripcion: "hola a todos" },
    {weapon: "Olimpus Sword", imagen: "/images/OlimpusSword.jpg",descripcion: "hola a todos" },
    {weapon: "Medusa Head",imagen: "/images/MedusaHead.jpg",descripcion: "hola a todos"},
    {weapon: "Leviatan",imagen: "/images/leviatan.jpg",descripcion: "hola a todos"}
  ],selectedWeapon,
}) {

    const handleWeaponClick = (weapon) => {
        selectedWeapon(weapon);
    };



  return (
    <div>
        <h1>{titulo}</h1>
      {eleccionWeapons.map((item, index) => (
        <button key={index} onClick={() => handleWeaponClick(item)}>
          <p>{item.weapon}</p>
        </button>
      ))}
    </div>
  );
}
