'use client'

import Container from './Container'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { TbTargetArrow } from "react-icons/tb";
import { useRef, useState } from 'react';
import { AnimatedListItem } from './AnimatedListItem';
import { motion } from 'framer-motion'
import confetti from "canvas-confetti";
import { toast } from 'sonner';
import { PasoCard } from './PasoCard';
import { Conclusion } from './Conclusion';
import { FaDice } from "react-icons/fa6";

type Lanzamiento = Array<{ name: string, description: string }>

export const AmountThrowMonedaYDado = () => {
  const [amount, setAmount] = useState("1")
  const [error, setError] = useState("")
  const [margenError, setMargenError] = useState("")
  const [totalLanzamientos, setTotalLanzamientos] = useState({ c1_c: 0, c1_s: 0, c2_c: 0, c2_s: 0, c3_c: 0, c3_s: 0, c4_c: 0, c4_s: 0, c5_c: 0, c5_s: 0, c6_c: 0, c6_s: 0 })
  const [lanzamientos, setLanzamientos] = useState<Lanzamiento>([])
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioRef2 = useRef<HTMLAudioElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^(?:[1-9][0-9]{0,2}|1000)?$/; // Acepta números entre 1 y 1000

    if (regex.test(value) || value === "") {
      setAmount(value);
      setError(""); // Elimina el error si es válido
    } else {
      setAmount(value);
      setError("Debe ser un número entre 1 y 1000");
    }
  };

  const handleConfetti = (icon: string) => {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: icon, scalar });
 
    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
    };
 
    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });
 
      confetti({
        ...defaults,
        particleCount: 5,
      });
 
      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };
 
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };
console.log({margenError});

  const handleLanzamientos = () => {
    const resultados = Array.from({ length: Number(amount) }, (_, i) => {
      const dado = `C${Math.floor(Math.random() * 6) + 1}`; // C1 - C6
      const moneda = Math.random() < 0.5 ? "C" : "S"; // Cara (C) o Sello (S)
      const result = `${dado} - ${moneda}`; // Ejemplo: "C3 = C"

      return {
        name: result,
        description: `Lanz. #${(i + 1).toString().padStart(3, "0")}`,
      }
    });
    
    const conteo: Record<string, number> = resultados.reduce((acc: Record<string, number>, item) => {
      acc[item.name] = (acc[item.name] || 0) + 1;
      return acc;
    }, {});

    const margenError = (Math.abs((6.5 - parseFloat(((((conteo["C1 - C"] || 0) * 1) + ((conteo["C1 - S"] || 0) * 2) + ((conteo["C2 - C"] || 0) * 3) + ((conteo["C2 - S"] || 0) * 4) + ((conteo["C3 - C"] || 0) * 5) + ((conteo["C3 - S"] || 0) * 6) + ((conteo["C4 - C"] || 0) * 7) + ((conteo["C4 - S"] || 0) * 8) + ((conteo["C5 - C"] || 0) * 9) + ((conteo["C5 - S"] || 0) * 10) + ((conteo["C6 - C"] || 0) * 11) + ((conteo["C6 - S"] || 0) * 12)) / Number(amount)).toFixed(2))) / 6.5) * 100).toFixed(1)

    setLanzamientos(resultados);
    setTotalLanzamientos({ c1_c: conteo["C1 - C"] || 0, c1_s: conteo["C1 - S"] || 0, c2_c: conteo["C2 - C"] || 0, c2_s: conteo["C2 - S"] || 0, c3_c: conteo["C3 - C"] || 0, c3_s: conteo["C3 - S"] || 0, c4_c: conteo["C4 - C"] || 0, c4_s: conteo["C4 - S"] || 0, c5_c: conteo["C5 - C"] || 0, c5_s: conteo["C5 - S"] || 0, c6_c: conteo["C6 - C"] || 0, c6_s: conteo["C6 - S"] || 0 });
    setMargenError(margenError);
    handleConfetti("💰");
    setTimeout(() => { handleConfetti("🎲"); }, 500);
    setTimeout(() => { handleConfetti("💰"); }, 1000);

    toast.success("Lanzamientos realizados exitosamente.");
    if (audioRef.current) audioRef.current.play();
    if (audioRef2.current) audioRef2.current.play();
  }

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto mb-12">
      <Container className='flex flex-col gap-y-4 mb-20 max-w-md mx-auto'>
        <Label htmlFor="amount">Cantidad de lanzamientos:</Label>
        <Input 
          type="number" 
          id="amount" 
          placeholder="Cantidad" 
          className='py-5 dark:bg-[#151515] bg-white' 
          value={amount}
          onChange={handleChange}
        />
        {error && <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-red-500 text-xs">{error}</motion.p>}
        <button
          disabled={!!error || amount === "" || amount === "0"}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-dark-blue bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 md:px-10 font-semibold text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer hover:scale-105 hover:brightness-110 transition-all gap-x-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleLanzamientos}
        >
          Realizar lanzamientos
          <div className='text-lg'>
            <TbTargetArrow />
          </div>
        </button>
        <audio ref={audioRef} src="/sounds/dice-sound.mp3" />
        <audio ref={audioRef2} src="/sounds/coin-drop.mp3" />
      </Container>

      <Container className={lanzamientos.length === 0 ? "mb-20" : "mb-5"}>
        <div className="flex flex-col w-full mx-auto mb-5">
          <h2 className="text-xl md:text-2xl font-heading font-bold mt-6 font-orbitron">
            Lanzamientos:
          </h2>
        </div>
        <div className='bg-accent relative rounded-2xl p-3 max-h-[80vh] overflow-y-auto flex flex-wrap gap-3'>
          {
            lanzamientos.length === 0 
            ? (
                <div className='w-full flex items-center justify-center h-64'>
                  <span className='italic text-xl font-semibold z-40 font-orbitron text-center'>No hay lanzamientos aún</span>
                </div>
              )
            : (
                lanzamientos.map((item, idx) => (
                  <AnimatedListItem 
                    key={idx} 
                    name={item.name} 
                    description={item.description} 
                    Icon={FaDice} 
                  />
                ))
              )
          }
        </div>
      </Container>

      {
        lanzamientos.length !== 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28 relative overflow-visible py-5 px-6 md:max-w-4xl w-full">
              <PasoCard 
                index={0}
                title="Paso N°8" 
                description="Cantidades totales"
                math={`
                  C_1 - C = ${totalLanzamientos.c1_c} \\quad C_1 - S = ${totalLanzamientos.c1_s} \\\\ C_2 - C = ${totalLanzamientos.c2_c} \\quad
                  C_2 - S = ${totalLanzamientos.c2_s} \\\\ C_3 - C = ${totalLanzamientos.c3_c} \\quad C_3 - S = ${totalLanzamientos.c3_s} \\\\ C_4 - C = ${totalLanzamientos.c4_c} \\quad C_4 - S = ${totalLanzamientos.c4_s} \\\\ C_5 - C = ${totalLanzamientos.c5_c} \\quad C_5 - S = ${totalLanzamientos.c5_s} \\\\ C_6 - C = ${totalLanzamientos.c6_c} \\quad C_6 - S = ${totalLanzamientos.c6_s}
                `}
              />
              <PasoCard 
                index={22}
                title="Paso N°9" 
                description="Encontrar el valor obtenido"
                math={`
                  \\begin{aligned}
                    U_0 &= \\frac{${totalLanzamientos.c1_c}(1)}{${amount}} + \\frac{${totalLanzamientos.c1_s}(2)}{${amount}} + \\frac{${totalLanzamientos.c2_c}(3)}{${amount}} + \\frac{${totalLanzamientos.c2_s}(4)}{${amount}} + \\frac{${totalLanzamientos.c3_c}(5)}{${amount}} \\\\ &\\quad + \\frac{${totalLanzamientos.c3_s}(6)}{${amount}} + \\frac{${totalLanzamientos.c4_c}(7)}{${amount}} + \\frac{${totalLanzamientos.c4_s}(8)}{${amount}} + \\frac{${totalLanzamientos.c5_c}(9)}{${amount}} + \\frac{${totalLanzamientos.c5_s}(10)}{${amount}} \\\\ &\\quad + \\frac{${totalLanzamientos.c6_c}(11)}{${amount}} + \\frac{${totalLanzamientos.c6_s}(12)}{${amount}} \\\\ \\phantom{X} \\\\
                    U_0 &= \\frac{${(totalLanzamientos.c1_c * 1) + (totalLanzamientos.c1_s * 2) + (totalLanzamientos.c2_c * 3) + (totalLanzamientos.c2_s * 4) + (totalLanzamientos.c3_c * 5) + (totalLanzamientos.c3_s * 6) + (totalLanzamientos.c4_c * 7) + (totalLanzamientos.c4_s * 8) + (totalLanzamientos.c5_c * 9) + (totalLanzamientos.c5_s * 10) + (totalLanzamientos.c6_c * 11) + (totalLanzamientos.c6_s * 12)}}{${amount}} \\\\ \\phantom{X} \\\\
                    U_0 &= ${(((totalLanzamientos.c1_c * 1) + (totalLanzamientos.c1_s * 2) + (totalLanzamientos.c2_c * 3) + (totalLanzamientos.c2_s * 4) + (totalLanzamientos.c3_c * 5) + (totalLanzamientos.c3_s * 6) + (totalLanzamientos.c4_c * 7) + (totalLanzamientos.c4_s * 8) + (totalLanzamientos.c5_c * 9) + (totalLanzamientos.c5_s * 10) + (totalLanzamientos.c6_c * 11) + (totalLanzamientos.c6_s * 12)) / Number(amount)).toFixed(2)}
                  \\end{aligned}
                `}
              />
              <PasoCard 
                index={32}
                title="Paso N°9" 
                description="Encontrar el valor obtenido"
                math={`
                  \\begin{aligned}
                    U_0 &= \\frac{${totalLanzamientos.c1_c}(1)}{${amount}} + \\frac{${totalLanzamientos.c1_s}(2)}{${amount}} \\\\ 
                    &\\quad + \\frac{${totalLanzamientos.c2_c}(3)}{${amount}} + \\frac{${totalLanzamientos.c2_s}(4)}{${amount}} \\\\ 
                    &\\quad + \\frac{${totalLanzamientos.c3_c}(5)}{${amount}} + \\frac{${totalLanzamientos.c3_s}(6)}{${amount}} \\\\ 
                    &\\quad + \\frac{${totalLanzamientos.c4_c}(7)}{${amount}} + \\frac{${totalLanzamientos.c4_s}(8)}{${amount}} \\\\ 
                    &\\quad + \\frac{${totalLanzamientos.c5_c}(9)}{${amount}} + \\frac{${totalLanzamientos.c5_s}(10)}{${amount}} \\\\ 
                    &\\quad + \\frac{${totalLanzamientos.c6_c}(11)}{${amount}} + \\frac{${totalLanzamientos.c6_s}(12)}{${amount}} \\\\ \\phantom{X} \\\\
                    U_0 &= \\frac{${(totalLanzamientos.c1_c * 1) + (totalLanzamientos.c1_s * 2) + (totalLanzamientos.c2_c * 3) + (totalLanzamientos.c2_s * 4) + (totalLanzamientos.c3_c * 5) + (totalLanzamientos.c3_s * 6) + (totalLanzamientos.c4_c * 7) + (totalLanzamientos.c4_s * 8) + (totalLanzamientos.c5_c * 9) + (totalLanzamientos.c5_s * 10) + (totalLanzamientos.c6_c * 11) + (totalLanzamientos.c6_s * 12)}}{${amount}} \\\\
                    U_0 &= ${(((totalLanzamientos.c1_c * 1) + (totalLanzamientos.c1_s * 2) + (totalLanzamientos.c2_c * 3) + (totalLanzamientos.c2_s * 4) + (totalLanzamientos.c3_c * 5) + (totalLanzamientos.c3_s * 6) + (totalLanzamientos.c4_c * 7) + (totalLanzamientos.c4_s * 8) + (totalLanzamientos.c5_c * 9) + (totalLanzamientos.c5_s * 10) + (totalLanzamientos.c6_c * 11) + (totalLanzamientos.c6_s * 12)) / Number(amount)).toFixed(2)}
                  \\end{aligned}
                `}
              />
              <PasoCard
                index={30}
                title="Paso N°10"
                description="Encontrar el margen de error"
                math={`
                  \\varepsilon = \\left| \\frac{6.5 - ${(((totalLanzamientos.c1_c * 1) + (totalLanzamientos.c1_s * 2) + (totalLanzamientos.c2_c * 3) + (totalLanzamientos.c2_s * 4) + (totalLanzamientos.c3_c * 5) + (totalLanzamientos.c3_s * 6) + (totalLanzamientos.c4_c * 7) + (totalLanzamientos.c4_s * 8) + (totalLanzamientos.c5_c * 9) + (totalLanzamientos.c5_s * 10) + (totalLanzamientos.c6_c * 11) + (totalLanzamientos.c6_s * 12)) / Number(amount)).toFixed(2)}}{6.5} \\right| \\times 100\\% = ${margenError}\\%
                `}
              />
              <PasoCard
                index={40}
                title="Paso N°10"
                description="Encontrar el margen de error"
                math={`
                  \\varepsilon = \\left| \\frac{6.5 - ${(((totalLanzamientos.c1_c * 1) + (totalLanzamientos.c1_s * 2) + (totalLanzamientos.c2_c * 3) + (totalLanzamientos.c2_s * 4) + (totalLanzamientos.c3_c * 5) + (totalLanzamientos.c3_s * 6) + (totalLanzamientos.c4_c * 7) + (totalLanzamientos.c4_s * 8) + (totalLanzamientos.c5_c * 9) + (totalLanzamientos.c5_s * 10) + (totalLanzamientos.c6_c * 11) + (totalLanzamientos.c6_s * 12)) / Number(amount)).toFixed(2)}}{6.5} \\right| \\times 100\\% \\\\ \\phantom{X} \\\\
                  \\varepsilon = ${margenError}\\%
                `}
              />
            </div>
            
            <Conclusion 
              text1={`De este experimento donde se lanzó ${amount} veces una moneda y un dado al mismo tiempo, obtuvimos los siguientes resultados:`}
              math={`
                C_1 - C = ${totalLanzamientos.c1_c} \\\\ 
                C_1 - S = ${totalLanzamientos.c1_s} \\\\
                C_2 - C = ${totalLanzamientos.c2_c} \\\\
                C_2 - S = ${totalLanzamientos.c2_s} \\\\
                C_3 - C = ${totalLanzamientos.c3_c} \\\\
                C_3 - S = ${totalLanzamientos.c3_s} \\\\
                C_4 - C = ${totalLanzamientos.c4_c} \\\\
                C_4 - S = ${totalLanzamientos.c4_s} \\\\
                C_5 - C = ${totalLanzamientos.c5_c} \\\\
                C_5 - S = ${totalLanzamientos.c5_s} \\\\
                C_6 - C = ${totalLanzamientos.c6_c} \\\\
                C_6 - S = ${totalLanzamientos.c6_s}
              `}
              text2={`Donde el margen de error ${parseFloat(margenError) <= 5 ? "no" : ""} superó el 5%. Su resultado fue del ${margenError}% de tal manera que, esto demuestra que el proyecto es ${parseFloat(margenError) <= 5 ? "válido" : "inválido"} con un margen de error ${parseFloat(margenError) <= 5 ? "bajo" : "alto"}.`}
            />
          </>
        ) 
      }
    </div>
  )
}
