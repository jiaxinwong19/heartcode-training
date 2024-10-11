"use client"
import Image from "next/image";
import fightCat from "@/app/assets/fightcat.jpeg";
import fightCat2 from "@/app/assets/fightcat2.jpeg";
import fightCat3 from "@/app/assets/fightcat3.jpeg";
import dCat from "@/app/assets/dcat.jpeg";
import dCat1 from "@/app/assets/dcat1.jpeg";
import dCat2 from "@/app/assets/dcat2.jpeg";
import { useState } from "react";
import happyC from "@/app/assets/happycat.jpeg";
import happyC1 from "@/app/assets/happycat1.jpeg";

export default function Home() {
  const [messageVisible, setMessageVisible] = useState(false);
  function appear() {
    setMessageVisible(true);
  }
  return (
    <div>
      <div className="flex flex-col justify-center">
        <p className="font-bold text-5xl text-center m-5" style={{ fontFamily: 'Verdana' }}>don't do drugs!!!!</p>
        <div className="flex justify-center">
          <Image src={fightCat} alt="0.5" width={300}></Image>
          <Image src={fightCat2} alt="0.5" width={300}></Image>
          <Image src={fightCat3} alt="0.5" width={300}></Image>
        </div>
        <p className="text-2xl text-center m-5">if you do drugs you will end up like this:</p>
        <div className="flex justify-center">
          <Image src={dCat} alt="0.5" width={300}></Image>
          <Image src={dCat1} alt="0.5" width={300}></Image>
          <Image src={dCat2} alt="0.5" width={300}></Image>
        </div>
        <p className="text-2xl text-center m-5">if you stop doing drugs...</p>
        <button onClick={appear} className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">Press here to stop</button>
        {messageVisible && (
          <div className="flex justify-center">
            <Image src={happyC} alt="0.5" width={300}></Image>
            <Image src={happyC1} alt="0.5" width={300}></Image>
          </div>
        )}
      </div>
    </div>
  );
}

