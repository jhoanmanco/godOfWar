import React, { useState, useEffect } from "react";
import styles from "@/styles/EncuestaGOW.module.css";

export default function Weapons({
    titulo = "Armas",
    eleccionWeapons = [
    {weapon: "Espada caos", imagen: "/images/espadasCaos.jpg",descripcion: "Forjadas en el inframundo, unidas con cadenas ardientes al alma del guerrero que las porta." },
    {weapon: "Olimpus Sword", imagen: "/images/OlimpusSword.jpg",descripcion: "La hoja divina que puede segar incluso la inmortalidad. Símbolo del dominio celestial." },
    {weapon: "Medusa Head",imagen: "/images/MedusaHead.jpg",descripcion: "Una reliquia macabra. Mirarla directamente es abrazar la piedra eterna."},
    {weapon: "Leviatan",imagen: "/images/leviatan.jpg",descripcion: "Un arma helada del norte. Su filo trae muerte, su regreso es infalible."}
  ],selectedWeapon,
}) {

    const handleWeaponClick = (weapon) => {
      const audio = new Audio("/sounds/buttonSound.mp3");
      audio.play();
        selectedWeapon(weapon);
    };



  return (
    <div>
        <h1>{titulo}</h1>
      {eleccionWeapons.map((item, index) => (
        <button className={styles.button} key={index} onClick={() => handleWeaponClick(item)}>
          <p>{item.weapon}</p>
        </button>
      ))}
    </div>
  );
}
