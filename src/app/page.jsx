"use client"
import { useEffect, useState } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import NavBar from "@/components/NavBar";
import Home from "@/components/Home";

export default function Page() {
  const [vantaEffectPhone, setVantaEffectPhone] = useState(0);
  const [vantaEffectDesktop, setVantaEffectDesktop] = useState(0);

  useEffect(() => {
    if (!vantaEffectPhone) {
      setVantaEffectPhone(
        HALO({
          el: "#mainPhone",
          THREE,
          baseColor: 0x1a59,
          amplitudeFactor: 2.00,
          size: 0.50
        })
      );
    }
    return () => {
      if (vantaEffectPhone) vantaEffectPhone.destory();
    };
  }, [vantaEffectPhone]);

  useEffect(() => {
    if (!vantaEffectDesktop) {
      setVantaEffectDesktop(
        HALO({
          el: "#mainDesktop",
          THREE,
          baseColor: 0x1a59,
          amplitudeFactor: 1.50,
          size: 1.00,
        })
      );
    }
    return () => {
      if (vantaEffectDesktop) vantaEffectDesktop.destory();
    };
  }, [vantaEffectDesktop]);
  return (
    <div>

      <div className='text-white min-h-screen hidden sm:block' id="mainDesktop">
        <NavBar />
        <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%]  mx-auto pt-5 pb-20'>
          <Home />
        </div>
      </div>

      <div className='text-white min-h-screen block sm:hidden' id="mainPhone">
        <NavBar />
        <div className='w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto pt-5 pb-20'>
          <Home />
        </div>
      </div>

    </div>
  );
}