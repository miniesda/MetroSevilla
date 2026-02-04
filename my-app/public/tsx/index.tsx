"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
  const [languaje, setLanguaje] = useState<"en" | "es">("es");
    return (
        <div className='index'>
            <img src={languaje === "en" ? "https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/cambiarEspañol.png" : "https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/cambiarEnglish.png"} alt={languaje === "en" ? "Cambiar a Español" : "Change to English"} 
            width={308} height={60} onClick={() => setLanguaje(languaje === "en" ? "es" : "en")}/>
            <h1>{languaje === "en" ? "Metro Sevilla AR" : "Metro Sevilla AR"}</h1>
            <p>{languaje === "en" ? "Point your phone camera and click onto the stations on the map to check the arrival time of the next trains" :
            "Apunta con la cámara del móvil y pulsa a las estaciones del mapa para consultar el tiempo de llegada de los próximos trenes"}</p>
            <Image
                src="https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/image-index.png"
                alt="My Image"
                width={313}
                height={157}
            />
            <Link href={`/arview?lang=${languaje}`}>
            <Image
                src={languaje === "en" ? "https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/start.png" : "https://raw.githubusercontent.com/miniesda/MetroSevilla/main/my-app/public/img/empezar.png"}
                alt={languaje === "en" ? "Start AR" : "Empezar AR"}
                width={308}
                height={60}
            />
            </Link>
        </div>
    );
}