import { useEffect, useState } from "react";
import Dioses from "@/components/Dioses";
import Weapons from "@/components/Weapons";
import Worlds from "@/components/Worlds";
import Enemies from "@/components/Enemies";
import Image from "next/image";

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


  return (
    <div>
      <div>
        <Dioses titulo={"Seleccionar Dios"} selectedGod={setSelectedGod} />
      </div>
      {selectedGod != null && (
        <div>
          <Image 
          src={`${selectedGod.imagen}`}
          width={200}
          height={200}
          alt={`${selectedGod.nameG}`}/>
          <div>
          <p>{`${selectedGod.descripcion}`}</p>
            </div>
        </div>
      )}

      <div>
        <Weapons
          titulo={"Selecciona un arma"}
          selectedWeapon={setSelectedWeapon}
        />
      </div>
      {selectedWeapon != null && (
        <div>
          <Image 
          src={`${selectedWeapon.imagen}`}
          width={200}
          height={200}
          alt={`${selectedWeapon.weapon}`}/>
          <div>
          <p>{`${selectedWeapon.descripcion}`}</p>
            </div>
          
        </div>
      )}
      
      <div>
        <Worlds
          titulo={"Selecciona un Mundo"}
          selectedWorld={setSelectedWorld}
        />
      </div>
      {selectedWorld != null && (
        <div>
          <Image 
          src={`${selectedWorld.imagen}`}
          width={200}
          height={200}
          alt={`${selectedWorld.name}`}/>
          <div>
          <p>{`${selectedWorld.descripcion}`}</p>
            </div>
        </div>
      )}

    <div>
        <Enemies
          titulo={"Seleccionar Enemigos"}
          selectedEnemies={setSelectedEnemies}
        />
      </div>
      {selectedEnemies!= null && (
        <div>
          <Image 
          src={`${selectedEnemies.imagen}`}
          width={200}
          height={200}
          alt={`${selectedEnemies.name}`}/>
          <div>
          <p>{`${selectedEnemies.descripcion}`}</p>
            </div>
        </div>
      )}
    </div>
  );
}
