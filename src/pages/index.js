import { useEffect, useState } from "react";
import Dioses from "@/components/Dioses";
import Weapons from "@/components/Weapons";
import Worlds from "@/components/Worlds";
import Enemies from "@/components/Enemies";
import Image from "next/image";
import styles from "@/styles/EncuestaGOW.module.css";

export default function Home() {
  const [selectedGod, setSelectedGod] = useState(null);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [selectedEnemies, setSelectedEnemies] = useState(null);


  useEffect(() => {
    console.log(selectedGod);
  }, [selectedGod]);

  useEffect(() => {
    console.log(selectedWeapon);
  }, [selectedWeapon]);

  useEffect(() => {
    console.log(selectedWorld);
  }, [selectedWorld]);

  useEffect(() => {
    console.log(selectedEnemies);
  }, [selectedEnemies]);

  useEffect(() => {
    const audio = new Audio("/sounds/god-of-war-theme.mp3");
    audio.volume = 0.3;
    audio.loop = true; 
    audio.play().catch((error) => {
      console.log("Reproducción automática bloqueada por el navegador");
    });
  }, []);

  <button onClick={() => {
    const audio = new Audio("/sounds/god-of-war-theme.mp3");
    audio.volume = 0.3;
    audio.loop = true;
    audio.play();
  }}>Reproducir música</button>
  

  return (
    <div>
      <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <Dioses titulo={"Seleccionar Dios"}  selectedGod={setSelectedGod} />
      </div>
      {selectedGod != null && (
        <div className={styles.selectedItem}>
          <Image className={styles.imagen}
          src={`${selectedGod.imagen}`}
          width={200}
          height={200}
          alt={`${selectedGod.nameG}`}/>
          <div className={styles.description}>
          <p >{`${selectedGod.descripcion}`} </p>
            </div>
        </div>
      )}
      </div>


      <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <Weapons
          titulo={"Selecciona un arma"} 
          selectedWeapon={setSelectedWeapon}
        />
      </div>
      {selectedWeapon != null && (
        <div className={styles.selectedItem}>
          <Image className={styles.imagen}
          src={`${selectedWeapon.imagen}`}
          width={200}
          height={200}
          alt={`${selectedWeapon.weapon}`}/>
          <div className={styles.description}>
          <p>{`${selectedWeapon.descripcion}`}</p>
            </div>
          
        </div>
      )}
      </div>
      

      <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <Worlds
          titulo={"Selecciona un Mundo"}
          selectedWorld={setSelectedWorld}
        />
      </div>
      {selectedWorld != null && (
        <div className={styles.selectedItem}>
          <Image className={styles.imagen}
          src={`${selectedWorld.imagen}`}
          width={200}
          height={200}
          alt={`${selectedWorld.name}`}/>
          <div className={styles.description}>
          <p className={styles.descripcion}>{`${selectedWorld.descripcion}`}</p>
            </div>
        </div>
      )}
      </div>



      <div className={styles.container}>
    <div className={styles.sectionTitle}>
        <Enemies
          titulo={"Seleccionar Enemigos"} 
          selectedEnemies={setSelectedEnemies}
        />
      </div>
      {selectedEnemies!= null && (
        <div className={styles.selectedItem}>
          <Image className={styles.imagen}
          src={`${selectedEnemies.imagen}`}
          width={200}
          height={200}
          alt={`${selectedEnemies.name}`}/>
          <div className={styles.description}>
          <p>{`${selectedEnemies.descripcion}`}</p>
            </div>
        </div>
      )}
      </div>
    </div>
  );
}
