import { FaLocationArrow } from "react-icons/fa6"
import { RetroGrid } from "./magicui/retro-grid"
import Link from "next/link"
import { ShimmerButtonHero } from "./ShimmerButtonHero"

export const Hero = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ShimmerButtonHero />
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-balance sm:text-7xl font-orbitron leading-14 md:leading-20">
              Parcial Primer Corte
            </h1>
            <p className="mt-7 font-medium text-pretty text-neutral-700 dark:text-neutral-400 sm:text-xl/8 flex flex-col items-center">
              <span className="text-sm md:text-base italic">▶ Raúl Andrés Quimbaya Puentes</span>
              <span className="text-sm md:text-base italic">▶ Daniel Santiago Ramírez Aldana</span>
              <span className="text-sm md:text-base italic">▶ Juan David Rodríguez Calderón</span>
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Link
                href="/ejercicio1-primer-corte"
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-dark-blue bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 md:px-10 font-semibold text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer hover:scale-105 hover:brightness-110 transition-all gap-x-2 text-sm md:text-base"
              >
                Comenzar con el primer ejercicio
                <div className='text-lg'>
                  <FaLocationArrow />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <RetroGrid className="-z-20" />
    </section>
  )
}