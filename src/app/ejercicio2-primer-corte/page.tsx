import { PasoCard } from "@/components/PasoCard";
import Container from "@/components/Container";
import { Spotlight } from "@/components/ui/spotlight";
import { AmountThrowDado } from "@/components/AmountThrowDado";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";
import { Footer } from "@/components/Footer";

export default function Ejercicio2 () {
  return (
    <main className="w-full relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="w-full h-full relative z-40">
        <Spotlight className="-top-80 -left-10 md:-left-96 h-screen hidden lg:flex" fill="white" />
      </div>
      <section className="py-24 px-4 md:px-6 lg:px-8 relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-14 md:mb-16">
          <Container>
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-6 font-orbitron">
                Ejercicio N°2 - Ejercicio del dado
              </h2>
              <p className="text-base md:text-lg text-center mt-6 text-gray-600 dark:text-gray-400 italic">
                Aqui podras encontrar los pasos para resolver el ejercicio del dado
              </p>
            </div>
          </Container>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 relative overflow-visible py-5 px-6 md:max-w-4xl w-full">
            <PasoCard 
              index={0}
              title="Paso N°1" 
              description="Espacio muestral"
              math="\cap = \{ C_1, C_2, C_3, \\ C_4, C_5, C_6\}"
            />
            <PasoCard 
              index={22}
              title="Paso N°2" 
              description="Discriminar eventos"
              math="A = \{ {C_1} \} \quad B = \{ {C_2} \} \quad C = \{ {C_3} \} \\ D = \{ {C_4} \} \quad E = \{ {C_5} \} \quad F = \{ {C_6} \}"
            />
            <PasoCard 
              index={32}
              title="Paso N°2" 
              description="Discriminar eventos"
              math="A = \{ {C_1} \} \quad B = \{ {C_2} \} \\ C = \{ {C_3} \} \quad D = \{ {C_4} \} \\ E = \{ {C_5} \} \quad F = \{ {C_6} \}"
            />
            <PasoCard
              index={22}
              title="Paso N°3"
              description="Encontrar la probabilidad de cada evento"
              math="P(A) = \frac{1}{6} = 0.16 \quad P(B) = \frac{1}{6} = 0.16 \\ \phantom{X} \\ P(C) = \frac{1}{6} = 0.16 \quad P(D) = \frac{1}{6} = 0.16 \\ \phantom{X} \\ P(E) = \frac{1}{6} = 0.16 \quad P(F) = \frac{1}{6} = 0.16"
            />
            <PasoCard
              index={32}
              title="Paso N°3"
              description="Encontrar la probabilidad de cada evento"
              math="P(A) = \frac{1}{6} = 0.16 \\ \phantom{X} \\ P(B) = \frac{1}{6} = 0.16 \\ \phantom{X} \\ P(C) = \frac{1}{6} = 0.16 \\ \phantom{X} \\ P(D) = \frac{1}{6} = 0.16 \\ \phantom{X} \\ P(E) = \frac{1}{6} = 0.16 \\ \phantom{X} \\ P(F) = \frac{1}{6} = 0.16"
            />
            <PasoCard
              index={3}
              title="Paso N°4"
              description="Diagrama de árbol"
              math="
                D \begin{array}{c}
                \nearrow C_1 \\ 
                \nearrow C_2 \\
                \nearrow C_3 \\
                \searrow C_4 \\
                \searrow C_5 \\
                \searrow C_6
                \end{array}
              "
            />
            <PasoCard
              index={4}
              title="Paso N°5"
              description="Codificar"
              math="
                \begin{array}{c|c|c}
                C_1 & C_2 & C_3 \\
                \hline
                1 & 2 & 3
                \end{array} \\ \phantom{X} \\
                \begin{array}{c|c|c}
                C_4 & C_5 & C_6 \\
                \hline
                4 & 5 & 6
                \end{array}
              "
            />
            <PasoCard
              index={22}
              title="Paso N°6"
              description="Encontrar el valor esperado"
              math="
                \begin{aligned}
                  U_e &= 1 \left( \frac{1}{6} \right) + 2 \left( \frac{1}{6} \right) + 3 \left( \frac{1}{6} \right) + 4 \left( \frac{1}{6} \right) + 5 \left( \frac{1}{6} \right) + 6 \left( \frac{1}{6} \right) \\
                  U_e &= 0.16 + 0.33 + 0.5 + 0.66 + 0.83 + 1 \\
                  U_e &= 3.5
                \end{aligned}
              "
            />
            <PasoCard
              index={32}
              title="Paso N°6"
              description="Encontrar el valor esperado"
              math="
                \begin{array}{c}
                \begin{aligned}
                    U_e &= 1 \left( \frac{1}{6} \right) + 2 \left( \frac{1}{6} \right) \\
                        &\quad + 3 \left( \frac{1}{6} \right) + 4 \left( \frac{1}{6} \right) \\
                        &\quad + 5 \left( \frac{1}{6} \right) + 6 \left( \frac{1}{6} \right) \\ \phantom{X} \\
                    U_e &= 0.16 + 0.33 + 0.5 \\
                        &\quad + 0.66 + 0.83 + 1 \\
                    U_e &= 3.5
                \end{aligned}
                \end{array}
              "
            />
          </div>
        </div>
      </section>
      
      <section className="-my-8 px-4 md:px-6 lg:px-8 relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-12">
          <Container className="relative">
            <GridPattern
              width={30}
              height={30}
              x={-1}
              y={-1}
              strokeDasharray={"4 2"}
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                "h-[250%] w-[100%] -z-50"
              )}
            />
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-heading font-bold mt-6">
                Paso N°7 - Lanzamientos
              </h2>
              <p className="text-base md:text-lg text-center mt-6 text-gray-600 dark:text-gray-400 italic">
                En esta sección tendrás que definir la cantidad de lanzamientos del dado para poder continuar y hallar el margen de error del ejercicio planteado
              </p>
            </div>
          </Container>
        </div>

        <AmountThrowDado />
      </section>
      <Meteors number={15} />
      <Footer />
    </main>
  )
}
