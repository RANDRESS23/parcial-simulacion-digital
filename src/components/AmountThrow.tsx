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

type Lanzamiento = Array<{ name: string, description: string }>

export const AmountThrow = () => {
  const [amount, setAmount] = useState("1")
  const [error, setError] = useState("")
  const [margenError, setMargenError] = useState("")
  const [totalLanzamientos, setTotalLanzamientos] = useState({ cara: 0, sello: 0 })
  const [lanzamientos, setLanzamientos] = useState<Lanzamiento>([])
  const audioRef = useRef<HTMLAudioElement>(null);

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

  const handleConfetti = () => {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "💰", scalar });
 
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

  const handleLanzamientos = () => {
    const resultados = Array.from({ length: Number(amount) }, (_, i) => ({
      name: Math.random() < 0.5 ? "Cara" : "Sello",
      description: `Lanz. #${(i + 1).toString().padStart(3, "0")}`,
    }));
    const totalCara = resultados.filter((item) => item.name === "Cara").length;
    const totalSello = resultados.filter((item) => item.name === "Sello").length;
    const margenError = (Math.abs((1.5 - parseFloat((((totalCara * 1) + (totalSello * 2)) / Number(amount)).toFixed(2))) / 1.5) * 100).toFixed(1)

    setLanzamientos(resultados);
    setTotalLanzamientos({ cara: totalCara, sello: totalSello });
    setMargenError(margenError);
    handleConfetti();
    setTimeout(() => { handleConfetti(); }, 500);
    setTimeout(() => { handleConfetti(); }, 1000);

    toast.success("Lanzamientos realizados exitosamente.");
    if (audioRef.current) audioRef.current.play();
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
        <audio ref={audioRef} src="/sounds/coin-drop.mp3" />
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
                  <AnimatedListItem name={item.name} description={item.description} key={idx} />
                ))
              )
          }
        </div>
      </Container>

      {
        lanzamientos.length !== 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-28 relative overflow-visible py-5 px-6 md:max-w-4xl w-full">
              <PasoCard 
                index={0}
                title="Paso N°8" 
                description="Cantidades totales"
                math={`Cara = ${totalLanzamientos.cara} \\quad Sello = ${totalLanzamientos.sello}`}
              />
              <PasoCard 
                index={22}
                title="Paso N°9" 
                description="Encontrar el valor obtenido"
                math={`
                  \\begin{aligned}
                    U_0 &= \\frac{${totalLanzamientos.cara}(1) + ${totalLanzamientos.sello}(2)}{${amount}} = \\frac{${(totalLanzamientos.cara * 1) + (totalLanzamientos.sello * 2)}}{${amount}} \\\\
                    U_0 &= ${(((totalLanzamientos.cara * 1) + (totalLanzamientos.sello * 2)) / Number(amount)).toFixed(2)}
                  \\end{aligned}
                `}
              />
              <PasoCard 
                index={32}
                title="Paso N°9" 
                description="Encontrar el valor obtenido"
                math={`
                  \\begin{aligned}
                    U_0 &= \\frac{${totalLanzamientos.cara}(1) + ${totalLanzamientos.sello}(2)}{${amount}} \\\\
                    U_0 &= \\frac{${(totalLanzamientos.cara * 1) + (totalLanzamientos.sello * 2)}}{${amount}} \\\\
                    U_0 &= ${(((totalLanzamientos.cara * 1) + (totalLanzamientos.sello * 2)) / Number(amount)).toFixed(2)}
                  \\end{aligned}
                `}
              />
              <PasoCard
                index={30}
                title="Paso N°10"
                description="Encontrar el margen de error"
                math={`
                  \\varepsilon = \\left| \\frac{1.5 - ${(((totalLanzamientos.cara * 1) + (totalLanzamientos.sello * 2)) / Number(amount)).toFixed(2)}}{1.5} \\right| \\times 100\\% = ${margenError}\\%
                `}
              />
              <PasoCard
                index={40}
                title="Paso N°10"
                description="Encontrar el margen de error"
                math={`
                  \\varepsilon = \\left| \\frac{1.5 - ${(((totalLanzamientos.cara * 1) + (totalLanzamientos.sello * 2)) / Number(amount)).toFixed(2)}}{1.5} \\right| \\times 100\\% \\\\
                  \\varepsilon = ${margenError}\\%
                `}
              />
            </div>
            
            <Conclusion 
              text1={`De este experimento donde se lanzó ${amount} veces una moneda, obtuvimos los siguientes resultados:`}
              math={`
                Cara = ${totalLanzamientos.cara} \\\\ 
                Sello = ${totalLanzamientos.sello}
              `}
              text2={`Donde el margen de error ${parseFloat(margenError) <= 5 && "no"} superó el 5%. Su resultado fue del ${margenError}% de tal manera que, esto demuestra que el proyecto es ${parseFloat(margenError) <= 5 ? "válido" : "inválido"} con un margen de error ${parseFloat(margenError) <= 5 ? "bajo" : "alto"}.`}
            />
          </>
        ) 
      }
    </div>
  )
}
